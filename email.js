function sendMail() {
    var body = document.getElementById("cmessage").value;
    var subject = document.getElementById("csubject").value;
    var email = document.getElementById("cemail").value;

    var mailtoLink = `mailto:BjazzJireh@Gmail.com?body=${body} - Por Favor regrese un mensaje a ${email}&subject=${subject} Busca Mas Informacion`;
    
    window.location.href = mailtoLink;
}
