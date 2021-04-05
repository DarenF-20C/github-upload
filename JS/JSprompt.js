var userName;
var age = 0;
userName = prompt("Please Enter Your Name ");
document.write("<h2>Hello, " + userName + " !</h2>");

age = prompt("Please Enter Your Age Secretly~");
if (age >= 18){
    document.write("<h3>You can now go to pub. Haha~</h3>");
}
else {
    document.write("You are too young to go clubbing. So sad~")
}
