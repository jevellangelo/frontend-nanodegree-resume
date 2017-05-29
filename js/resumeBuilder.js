/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Jevell Angelo Acebedo")

// var email = "jevell321@me.com";

// var newEmail = email.replace("me", "gmail");

// console.log(email);
// console.log(newEmail);

// var awesomeThoughts = "My name is Jevell and I am AWESOME";

// var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");

// $("#main").append(funThoughts);

// var name = "Jevell Acebedo";

// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Front-End Developer";

// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);


// $("#main").append(skills);

// $("#main").append(skills[0]);

// $("#main").append(skills.length);

var bio = {
    "name" : "Jevell Acebedo",
    "role" : "Front-End Developer",
    "contacts" : {
        "mobile" : "415.818.7877",
        "email" : "jevell321@gmail.com",
        "twitter": "https://twitter.com/jevellacebedo",
        "github" : "https://github.com/jevellangelo",
        "location": "San Francisco"
    },
    "welcomeMessage" : "Hello friend...",
    "bioPic" : "images/fry.jpg",
    "skills" : ["awesomeness", "programming", "lifting", "HTML", "CSS", "JS"]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);


$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#footerContacts").append(formattedMobile);
$("#footerContacts").append(formattedEmail);
$("#footerContacts").append(formattedTwitter);
$("#footerContacts").append(formattedGithub);
$("#main").append(bio.bioPic);