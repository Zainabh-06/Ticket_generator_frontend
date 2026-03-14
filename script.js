const form = document.getElementById("ticketForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const github = document.getElementById("github").value.trim();
const avatar = document.getElementById("avatar").files[0];

const error = document.getElementById("error");

error.textContent="";

if(!name || !email || !github || !avatar){
error.textContent="Please fill all fields";
return;
}

const validTypes=["image/png","image/jpeg","image/webp"];

if(!validTypes.includes(avatar.type)){
error.textContent="Avatar must be JPG PNG or WebP";
return;
}

if(avatar.size > 500000){
error.textContent="Image must be under 500KB";
return;
}

const reader = new FileReader();

reader.onload=function(){

const ticketData={
name:name,
email:email,
github:github,
avatar:reader.result,
id:Math.floor(Math.random()*90000)+10000
};

localStorage.setItem("ticketData",JSON.stringify(ticketData));

window.location.href="ticket.html";

}

reader.readAsDataURL(avatar);

});