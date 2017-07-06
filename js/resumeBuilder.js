var bio = {
    "name": "Jevell Acebedo",
    "role": "Front-End Developer",
    "contacts": {
        "mobile": "415.818.7877",
        "email": "jevell321@gmail.com",
        "twitter": "https://twitter.com/jevellacebedo",
        "github": "https://github.com/jevellangelo",
        "location": "San Francisco, CA"
    },
    "welcomeMessage": "I am currently working as an IT Specialist/Junior Developer in San Francisco, CA.",
    "bioPic": "images/jevell_crop.jpg",
    "skills": ["awesomeness", "programming", "HTML", "CSS", "Javascript"]
};

var education = {
    "schools": [{
        "name": "University of California Davis",
        "location": "Davis, CA",
        "degree": "BS",
        "majors": ["Mechanical Engineering", "Aeronautical and Space Engineering"],
        "dates": "2010",
        "url": "https://www.ucdavis.edu/"
    }],
    "online courses": [{
        "school": "Udacity",
        "title": "Front-End Developer Nanodegree",
        "dates": "present",
        "url": "https://www.udacity.com/"
    }]
};

var work = {
    "jobs": [{
        "employer": "Bently Enterprises",
        "title": "IT Specialist",
        "location": "San Francisco, CA",
        "dates": "2015 to present",
        "description": "Oversee the day-to-day operation of computer networks including hardware and software support, training, and special projects; Develop, deploy, and manage projects including network related wiring plans, software and hardware purchases, system installation, and hardware and software maintenance and support. Maintain routers, switches, and wiring. Establish and maintain user accounts, profiles, file sharing, access privileges, and security; Assist with the management of upgrades to the company’s telephone systems. Interact with internal clients at all levels to help resolve IT-related issues and provide answers in a timely manner."
    },
    {
        "employer": "UC Davis Primate Center",
        "title": "Programmer II - IT Support Specialist",
        "location": "Davis, CA",
        "dates": "2015",
        "description": "Under the direction of the IT Manager, provide computer workstation and IT services support via telephone, e-mail, and in-person at client work areas. Provide support for desktop and laptop computer hardware and peripherals, Windows and Mac operating systems, application software, and in-house applications. Troubleshoot hardware, software, and network connectivity issues using all available tools. Work with team members to manage Windows and Mac client workstations. Plan, purchase, build, initialize and update workstations as new releases, upgrades, patches and hot-fixes become available and approved. Follow documented procedures. Configure workstations to match department or unit specific configurations and to comply with campus security policies. Backup, restore and transfer user data and preferences when applicable. Work with Systems Administrator on research, planning, development, testing and production of server-side hardware and software technologies, including network security, storage, server maintenance and resource management. Assist the IT unit with special projects. Work on short-term and long-term assignments within the IT unit. Document assignments and support incidents in the in-house issue tracking system."
    },
    {
        "employer": "UC Davis College of Biological Sciences Dean's Office",
        "title": "Computer Resource Specialist II",
        "location": "Davis, CA",
        "dates": "2010-2015",
        "description": "Under direction of supervisor, provide computer workstation and IT services support via telephone, e­mail, and in ­person at client work areas. Provide support for desktop and laptop computer hardware and peripherals, Windows and Mac operating systems, application software, and in­ house applications. Troubleshoot hardware, software, and network connectivity issues using all available tools. Work with team members to manage Windows and Mac client workstations. Plan, purchase, build, initialize and update workstations as new releases, upgrades, patches and hot­fixes become available and approved. Follow documented procedures. Configure workstations to match department or unit specific configurations and to comply with campus security policies. Backup, restore and transfer user data and preferences when applicable. Work with Systems Administrator on research, planning, development, testing and production of server­-side hardware and software technologies, including network security, storage, server maintenance and resource management. Assist the IT unit with special projects. Work on short­-term and long­term assignments within the IT unit. Document assignments and support incidents in the in­ house issue tracking system. "
    },
    {
        "employer": "UC Davis Pulbic Health Sciences Department",
        "title": "IT Support",
        "location": "Davis, CA",
        "dates": "2009-2010",
        "description": "Provide computer technical support to departmental users via email, telephone, and in-person. Troubleshoot operating system and software issues on both Windows and Mac OS X. Configure computers based on departmental security and configuration standards. Provide valued customer service to users with a vast range of computer experience. Independently solve daily technical problems."
    },
    {
        "employer": "UC Davis University Communications",
        "title": "Computer Tech Support Intern",
        "location": "Davis, CA",
        "dates": "2008-2009",
        "description": "Diagnose and solve hardware/software faults on both Windows and Mac OS X desktops. Provide valued customer service to users with a vast range of computer experience. Ensure smooth operation of computer resources."
    }
    ]
};

var projects = {
    "projects": [{
        "title": "Build a Portfolio Site",
        "dates": "2017",
        "description": "I was provided with a design mockup as a PDF-file and I replicated that design in HTML and CSS. I developed a responsive website that displays images, descriptions and links to each of the portfolio projects I completed throughout the course of the Front-End Web Developer Nanodegree.",
        "images": ["images/197x148.gif", "images/197x148.gif"],
        // ["https://jevellangelo.github.io/portfolio/", "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"]
    },
    {
        "title": "Healthways Website",
        "dates": "2017",
        "description": "Provided with a powerpoint presentation, I was tasked with creating a website for the Healthways non-profit organization.",
        "images": ["images/197x148.gif", "images/197x148.gif"],
        // "images": ["http://104.239.140.169/images_src/healthways_website.png"],
    }
    ]
};

// Lesson 10.1: If Statements
if(bio.name.length > 0) {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);
}

// Included previous lesson elements
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);

$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);



if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
    formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
    $("#skills").append(formattedSkill);

}

var displayWork = function() {
    //Lesson 10.4 For-In Loops edit to For Loops
    for (var i = 0; i < work.jobs.length; i++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        $(".work-entry:last").append(formattedDates);
        $(".work-entry:last").append(formattedLocation);
        $(".work-entry:last").append(formattedDescription);
    }
}

displayWork();


// Lesson 10.9 Collecting Click Locations
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});


// Lesson 10.11 Internationalize Name
function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);



projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        // var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        // $(".project-entry:last").append(formattedImage);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

projects.display();

$("#mapDiv").append(googleMap);

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
// window.addEventListener('resize', function(e) {
//   Make sure the map bounds get updated on page resize
//  map.fitBounds(mapBounds);
// });









