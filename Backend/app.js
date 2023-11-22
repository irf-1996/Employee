const express=require('express')
const mongoose=require('mongoose');
const cors = require('cors');
const empdata=require('./data');
const app=new express();
const jwt = require('jsonwebtoken');



app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));//should be under express.json always


function verifytoken(req,res,next){
    try{
      const token=req.headers.token;
      console.log(token);
      if(!token) throw 'Unauthorized';
      let payload=jwt.verify(token,'reactempapp');
      if(!payload) throw 'Unauthorized';
      next()
    }
    catch(error){
      //console.log(error);
      res.status(401).send('error');
    }
  }

const path=require('path');


mongoose.connect('mongodb+srv://amaluirfana:amalu1992@emaployee.ldagpy6.mongodb.net/EMPDB?retryWrites=true&w=majority')
.then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.error("Error connecting to DB:", error);
  });


  app.post('/api/login/', async (req, res) => {
    try {
        const { email, password } = req.body;
        let token = null;

        // Check if the user is in the database
        // const foundUser = await postData.findOne({ email, password });

        if (email === 'user@gmail.com' && password === 'user') {
            // Database user found, use a different secret
            let payload = { email: email, password: password };
            token = jwt.sign(payload, 'reactempapp');
        } else if (email === 'admin@gmail.com' && password === 'admin') {
            // Check hardcoded admin credentials
            let payload = { email: email, password: password };
            token = jwt.sign(payload, 'reactempapp');
        } else {
            // No matching credentials
            return res.status(401).send('Invalid credentials');
        }

        res.status(200).send({ message: 'success', token: token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send(error);
    }
});
app.post('/add', async (req, res) => {
  try {
    var user = req.body;
    const savedUser = await empdata(user).save();
    res.status(201).send('Added successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});

app.put('/edit/:id', verifytoken, async (req, res) => {
  try {
    const item = req.body;
    const updatedData = await empdata.findByIdAndUpdate(req.params.id, item);

    if (!updatedData) {
      return res.status(404).send('Employee not found');
    }

    res.status(200).send('Updated successfully');
  } catch (error) {
    console.error('Error updating employee:', error);
    res.status(500).send('Error updating employee');
  }
});


app.delete('/delete/:id',verifytoken, async (req, res) => {
const id = req.params.id;
try {
  const deletedData = await empdata.findByIdAndDelete(id);
  res.status(200).send('Data deleted successfully');
} catch (error) {
  res.status(404).json(error);
}
});





 app.get('/',verifytoken, async (req, res) => {
    try {
      const data = await empdata.find();
       res.json(data);
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      res.status(404).json(error);
    }
  });

  
     
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  app.listen(3003,()=>{
    console.log("listening to the port 3003")
})  