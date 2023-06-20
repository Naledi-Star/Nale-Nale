function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "nale_nale",
        Password : "password",
        To : 'stargaleragwe@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Enquiry from personal website",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

}