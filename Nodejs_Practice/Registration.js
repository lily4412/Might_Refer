//Module

function CheckForUser(){
    console.log("Checking for user in DB")
    return false
}


function registerUser(){
    console.log("User Registration is successful")
}

module.exports = {
    CheckForUser : CheckForUser,
    registerUser : registerUser
}