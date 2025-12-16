const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));


const User = mongoose.model('User', {
email: String,
password: String,
points: { type: Number, default: 0 }
});


app.post('/api/register', async (req, res) => {
const user = new User(req.body);
await user.save();
res.json({ message: 'User created' });
});


app.post('/api/login', async (req, res) => {
const user = await User.findOne(req.body);
if (!user) return res.status(401).json({ error: 'Invalid login' });
res.json(user);
});


app.listen(3000, () => console.log('Server running on port 3000'));
