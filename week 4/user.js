const user = {
    username : "Snigdha",
    price : 999,

    welcomeMessage : function() {
        //console.log(`${this.username}, welcome to this webpage`);
        console.log(this); //op all the values

    }
}
user.welcomeMessage()
user.username = "poookiee"
user.welcomeMessage()
console.log(this); // op { }



function cat() {
    let username = "Ansu"
    console.log(this.username);
}

cat()