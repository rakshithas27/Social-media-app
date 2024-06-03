const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sequelize = require('./util/database'); 

//Routes
const userPostRoutes = require('./routes/userPostRoutes');
const commentRoutes = require('./routes/commentRoutes');

const app = express();

app.set('views', 'views');

app.userPostRoutes = require('./models/user');
app.commentRoutes = require('./models/comments');

app.use(cors());
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/user-post', userPostRoutes);
app.use('/comments', commentRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'user.html'));
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, async() => {
    try{
        await sequelize.sync();
        console.log('Database Synchronized');
    } catch (error) {
        console.log('Error synchronizing database : ', error);
    }
})