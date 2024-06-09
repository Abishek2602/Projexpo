/*const express=require("express");
const app=express();
const mongoose=require('mongoose')
const RegisterModel = require('./models/Register')
mongoose.connect("mongodb+srv://siva:siva123@projexpo.gz5mtuu.mongodb.net/User?retryWrites=true&w=majority&appName=ProjExpo",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/getRegister", (req,res) => {
    RegisterModel.find({}, (err,result)=>{
        if(err){
            res.json(err);
        } else{
            res.json(result);
        }
    });

});

app.listen(3001,() => {
    console.log("SERVER runs");
});
const express = require("express");
const app = express();
const cors=require("cors");
app.use(express.json());  // Middleware to parse JSON
app.use(cors());
const mongoose = require('mongoose');
const RegisterModel = require('./models/Register');


mongoose.connect("mongodb+srv://siva:siva123@projexpo.gz5mtuu.mongodb.net/User?retryWrites=true&w=majority&appName=ProjExpo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.get("/getRegister", async (req, res) => {
    try {
        const result = await RegisterModel.find({});
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

app.post("/createUser", async (req, res) => {
        const { username, emailid, password} = req.body;
        const user = await RegisterModel.findOne({ username });
        if (user) {
          return res.json({ message: "user already exists" });
        }
        const newUser = await RegisterModel.create({
          username,
          emailid,
          password
        });
        res.status(200).json({ message: "User created" });
      }
);

app.listen(3001, () => {
    console.log("SERVER runs");
});
*/
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const RegisterModel = require('./models/Register');
const cors = require('cors');

const app = express();
app.use(express.json());  // Middleware to parse JSON
app.use(cors());

const ProjectModel = require('./models/Project');

mongoose.connect("mongodb+srv://siva:siva123@projexpo.gz5mtuu.mongodb.net/User?retryWrites=true&w=majority&appName=ProjExpo", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Registration endpoint
app.post("/register", async (req, res) => {
    const { username, emailid, password } = req.body;

    try {
        const existingUser = await RegisterModel.findOne({ emailid });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new RegisterModel({
            username,
            emailid,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login endpoint
app.post("/login", async (req, res) => {
    const { emailid, password } = req.body;

    try {
        const user = await RegisterModel.findOne({ emailid });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token, user: { id: user._id, username: user.username, emailid: user.emailid } });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/addProject', async (req, res) => {
    const { title, description, link } = req.body;
  
    try {
      const newProject = new ProjectModel({ title, description, link });
      await newProject.save();
      res.status(201).json({ message: 'Project added successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to add project' });
    }
  });


  app.get('/getProjects', async (req, res) => {
    try {
      const projects = await ProjectModel.find();
      res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch projects' });
    }
  });
  
app.listen(3001, () => {
    console.log("Server running on port 3001");
});
