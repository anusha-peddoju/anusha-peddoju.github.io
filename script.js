$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
	if(this.scrollY > 500){
		$('.scroll-up-btn').addClass("show");
	}else{
		$('.scroll-up-btn').removeClass("show");
	}
    });
	//slide-up script
	$('.scroll-up-btn').click(function(){
		$('html').animate({scrollTop: 0});
	});
   // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
});
});
//typing animation script

var typed = new Typed(".typing", {
	strings: ["Tech learner","Programmer","Designer","CSE Student"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});

//working contact form

//listen for a submit
document.querySelector(".contact_form").addEventListener("submit",submitForm);

function submitForm(e){
e.preventDefault();

//get input values
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let subject = document.getElementById("subject").value;
let message = document.getElementById("msg").value;
document.querySelector(".contact_form").reset();
sendEmail(name,email,subject,message);
}

//send email
function sendEmail(name,email,subject,message){
Email.send({
	    SecureToken : "5f24c92d-4d95-4c1f-b5f5-c91ca7120ae0",
	    To : 'peddojuanusha754@gmail.com',
	    From :  'peddojuanusha754@gmail.com',
	    Subject : `${subject}`,
	    Body : `Name: ${name} <br/> Email: ${email} <br/> Subject: ${subject} <br/> Message: ${message}`,
	}).then((message) => alert("mail sent successfully"));
}










