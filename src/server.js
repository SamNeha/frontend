


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const sub = express();
app.use(express.json());


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/signup', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

  const User = mongoose.model('User', {
    username: String,
    email: String,
    password: String,
    contactNumber: String,
  });  
  app.post('/signup', async (req, res) => {
    const {
      username,
      email,
      password,
      contactNumber,
    } = req.body;

    try {
      if ( !username || !email || !password || !contactNumber ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
      const newUser = new User({
        username,
        email,
        password,
        contactNumber,
      });
      await newUser.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  const Doc = mongoose.model('Doc', {
    username: String,
    email: String,
    password: String,
    contactNumber: String,
    licenseNumber:String,
    specialization:String,
  });  
  app.post('/docsignup', async (req, res) => {
    const {
      username,
      email,
      password,
      contactNumber,
      licenseNumber,
      specialization,
    } = req.body;

    try {
      if ( !username || !email || !password || !contactNumber || !licenseNumber|| !specialization ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
      const newDoc = new Doc({
        username,
        email,
        password,
        contactNumber,
        licenseNumber,
        specialization,
      });
      await newDoc.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });



  const App = mongoose.model('App', {
    patientName:String,
           patientNumber:String,
           patientGender:String,
           appointmentTime:String,
           
  });  
  app.post('/app', async (req, res) => {
    const {
      patientName,
           patientNumber,
           patientGender,
           appointmentTime,
           
    } = req.body;

    try {
      if ( !patientName || !patientNumber || !patientGender || !appointmentTime  ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
      const newApp = new App({
        patientName,
           patientNumber,
           patientGender,
           appointmentTime,
          
      });
      await newApp.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const Dform = mongoose.model('Dform', {
    email: String,
    subject: String,
    message: String,
  });  
  app.post('/docform', async (req, res) => {
    const {
      email,
      subject,
      message,
      
    } = req.body;

    try {
      if (!email || !subject || !message) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
      const newDform = new Dform({
        
        email,
        subject,
      message,
        
      });
      await newDform.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const Sub = mongoose.model('Sub', {
    email: String,
  });
  app.post('/sub', async (req, res) => {
    const {
      email,
    } = req.body;

    try {
      if (!email ) {
        return res.status(400).json({ message: 'Please fill in all fields' });
      }
      const newSub = new Sub({
        
        email,
        
      });
      await newSub.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  app.get('/user/cards', async (req, res) => {
    const userId = getUserIdFromToken(req); // Implement a function to get the user's ID from the token
  
    try {
      const userCards = await UserCard.find({ userId });
      res.json(userCards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  


  app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const user = await User.findOne({ username });
      if (!user ) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Create and send a JWT token for successful login
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // You can adjust the token expiration time
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


  app.post('/doclogin', async (req, res) => {
    const { username, password, licenseNumber } = req.body;
  
    try {
      const user = await Doc.findOne({ username, licenseNumber });
  
      if (!user) {
        return res.status(401).json({ message: 'Invalid username, password, or license number' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      
      if (password !== user.password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Create and send a JWT token for successful login
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // You can adjust the token expiration time
      });
  
      res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  

  app.get('/Health-Plus/lab', (req, res)=> {
  });
  app.get('/Health-Plus/portal', (req, res)=> {
});
app.get('/Health-Plus/loginform', (req, res)=> {
});
app.get('/Health-Plus/signupform', (req, res)=> {
});
app.get('/Health-Plus/docportal', (req, res)=> {
});

app.get('/getUserDetails', async (req, res) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, 'your-secret-key');
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
});

app.get('/get-coaches', async (req, res) => {
  try {
    const subs = await Sub.find();
    res.json(subs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/getAppointments', async (req, res) => {
  const username = req.query.username; // Get the username from the query parameter

  try {
    // Query the database to retrieve user appointments based on the username
    const userAppointments = await App.find({ patientName: username });
    res.json(userAppointments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });  

