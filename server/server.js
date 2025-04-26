require('dotenv').config();
const { app, http, Sock, mongoose, chat, signup, todo,recepies} = require('./config');

//connecting to server
const dbURI = process.env.MONGODB_URI;
const PORT = 5000;

mongoose.connect(dbURI)
    .then((result) => {
        const server = http.createServer(app);
        console.log("db connected");
        //#socket.io
        Sock(server); 

        server.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log("Unable to connect to the database", error);
    });

app.get('/', (req, res) => {
    res.send('Amaricaya Halo :D');
});

//#DON'T YOU DARE EDIT THE ABOVE PORTION or else i'll send Jerry at your location
//please start your code from here :D

//$chats
app.use('/Social', chat);

//$authentication
app.use('/api/auth', signup );
//$ for getting users :- /api/auth/users

//$recepies 
// app.use('/Recipe', recepies);  

//$shopping cart
// app.use('/shop', shop);

//$todoList
app.use('/ShoppingList/todo', todo); 

//!handling error page 
app.use((req, res, next) => {
    res.status(404).send('Page not found');
});

//!middleware for handling errors
app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).json({
        error: {
            message: 'Internal Server Error'
        }
    });
});