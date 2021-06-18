let height = $(window).height()
let widht = $(window).width();
let nameOfSender = document.querySelector(".sender-name");
let emailOfSender = document.querySelector(".sender-email");
let message = document.querySelector(".message");
let sendBtn = document.querySelector(".send-btn");

if( widht<height){
    window.alert("I see you're viewing this website on a mobile device. unfortunately the developer is still working on the responsiveness for mobile devices. I would recommend you use a desktop.")
}

sendBtn.addEventListener("click", function(){
    sendBtn.innerHTML = "wait..";
    sendEmail();
    setTimeout(function(){
        sendBtn.innerHTML= "SEND"
    }, 5000)
})
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "dummyforutk@gmail.com",
      Password: "DUmmyforutk@12",
      To: 'utuniyal2@gmail.com',
      From: "dummyforutk@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
      Attachments: []
    })
      .then(function (message) {
        sendBtn.innerHTML= "EMAIL SENT!"
      });
    }