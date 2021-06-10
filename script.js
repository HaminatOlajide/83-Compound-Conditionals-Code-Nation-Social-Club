// set the correct username and password combination below
let correctUsername = "puresea";
let correctPassword = "Lavaplanet*2";


$("button").click(function() {
    let username = $(".username").val();
    let password = $(".password").val();
    if (username === correctUsername && password === correctPassword) {
        $(".message").text("SUCCESSS!!");
    }
    // WRITE YOUR COMPOUND CONDITIONAL BELOW THIS LINE



});