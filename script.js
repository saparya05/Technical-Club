/* THEME TOGGLE */

function toggleTheme(){
document.body.classList.toggle("dark");
}


/* EVENTS LIST FOR SIMPLE PAGE */

const eventList = [
"Web Development Workshop",
"Hackathon 2026",
"AI Seminar",
"Competitive Programming Contest"
];

const list = document.getElementById("eventList");

if(list){
eventList.forEach(event=>{
let li = document.createElement("li");
li.textContent = event;
list.appendChild(li);
});
}


/* ADVANCED EVENTS PAGE */

const eventsData = [
{
title:"Web Development Workshop",
date:"15 March 2026",
desc:"Learn HTML, CSS and JavaScript with hands-on projects."
},

{
title:"AI & Machine Learning Seminar",
date:"28 March 2026",
desc:"Introduction to Artificial Intelligence and real-world applications."
},

{
title:"24 Hour Hackathon",
date:"10 April 2026",
desc:"Build innovative tech solutions with your team."
},

{
title:"Competitive Programming Contest",
date:"22 April 2026",
desc:"Sharpen your algorithm and problem-solving skills."
}
];

const container = document.getElementById("eventsContainer");

if(container){

eventsData.forEach(event=>{

const card = document.createElement("div");
card.classList.add("event-card");

card.innerHTML = `
<h3>${event.title}</h3>
<p>${event.desc}</p>
<span>${event.date}</span>
`;

container.appendChild(card);

});

}


/* FORM VALIDATION */

document.getElementById("joinForm")?.addEventListener("submit", function(e){

let valid = true;

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let phone = document.getElementById("phone").value;

if(name === ""){
document.getElementById("nameError").innerText="Name required";
valid=false;
}

if(!email.includes("@")){
document.getElementById("emailError").innerText="Invalid email";
valid=false;
}

if(phone.length != 10){
document.getElementById("phoneError").innerText="Phone must be 10 digits";
valid=false;
}

if(!valid){
e.preventDefault();
}else{ 
    alert("Registration successful! Welcome to the Technical Club."); 
}

});

