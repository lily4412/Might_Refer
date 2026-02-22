const register = require('./Registration');
const os = require("os");
const fs = require("fs");
const express = require("express");

// function sayHello() {
//     console.log("Hello, world from NodeJS!");
// }

// sayHello();

// const isExisting = register.CheckForUser()
// if (isExisting) {
//     console.log("User already exists");
// }
// else {
//     register.registerUser();
// }

// console.log(os.hostname());
// console.log(os.freemem());

// fs.writeFile('./test.txt', "Testing the fs module", (err) => {
//     if (err) {
//         console.log("error occurred!");
//         return
//     }
//     console.log("File created succesfully!");

// })

// fs.readFile("./test.txt", 'utf8', (err, data) => {
//     if (err) {
//         console.log("error occurred!");
//         return
//     }
//     console.log("Data in file : ", data);
// })

//If we put fs.readFile inside fs.wrietFile then we get the data in file everytime if we put these 2 one by one it is not guaranteed to get the data in the file reason - async behaviour 

const app = express();

app.listen(3000,'0.0.0.0',()=>{ // u can use '0.0.0.0' for this server(current code) to send respinse to the request raised by the current wifi connected devices. 
        console.log("Welcome to the server!")
    })

app.get("/", (req, res) => {
    // console.log(req);
    res.send("Hello all devices on my LAN");
});

app.get("/saybye", (req, res) => {
    // console.log(req);
    res.send("Bye Bye!");
});

app.post('/CreateUser',(req,res)=>{
    res.send("Create New User");
})

app.put("/UpdateUser",(req,res)=>{
    res.send("Update the User");
})

app.delete("/DeleteUser",(req,res)=>{
    res.send("Delete the User");
})