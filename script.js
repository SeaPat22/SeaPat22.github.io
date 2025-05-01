function SendEmail() {
    const templateParams = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        message : document.querySelector("#message").value,
    };

    emailjs.send("service_vbxxrno", "template_qjd4buo", templateParams)
        .then(() => alert("Your message was sent successfully!").catch(() => alert("Sorry, your message was not sent!")));
}
