
const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');


const app = express();

// middlewares
require('dotenv').config()
// app.options('*', cors(corsOptions));
const corsOptions = {
    origin: ['http://localhost:3000', 'https://auth-neon-kappa.vercel.app'],
    credentials: true,
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

// cookieOptions
const cookieOptions = {
    maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    // httpOnly: process.env.NODE_ENV === 'development' ? false : true,
    // sameSite: 'none',
    secure: process.env.NODE_ENV === 'development' ? false : true,
    // domain: process.env.NODE_ENV === 'development' ? process.env.CLIENT_URI : process.env.CLIENT_URI_PROD,
    // path: '/login'
}
app.get('/cookie-options', (req, res) => {
    res.status(200).json({ cookieOptions })
})
// routes
app.get('/', (req, res) => {
    res.send('Server is up & running!')
}
);
app.post('/login', async (req, res) => {
    try {
        res.cookie('token', 'somerandomtoken', cookieOptions);
        res.status(200).json({ success: true, message: 'Logged in with dummy credentials!' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'server error' });
    }
})



app.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.send({ success: true, message: 'Logged out' })
});






const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}`))

module.exports = app;