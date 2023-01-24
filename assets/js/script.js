function sendMail() {    
    var body = document.getElementById("cmessage").value;
    var subject = document.getElementById("cname").value;
    var email = document.getElementById("cemail").value;

    window.location.replace(`mailto:bjazzjireh@gmail.com?body=${body} - Por Favor regrese un mensaje a ${email}&subject=${subject} Busca Mas Informacion`);    
}
