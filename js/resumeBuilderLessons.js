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

var education = {
    "schools" : [
        {
            "name" : "University of California Davis",
            "location" : "Davis, CA",
            "degree" : "BS",
            "majors" : ["Mechanical Engineering", "Aeronautical and Space Engineering"],
            "dates" : "2010"
        }
    ],
    "online courses" : [
        {
            "name" : "Udacity",
            "location" : "San Francisco, CA",
            "degree" : "Nanodegree",
            "majors" : ["Front-End Developer"],
            "dates" : "present"
        }
    ]
};

var work = {
    "jobs" : [
        {
            "employer" : "Bently Enterprises",
            "title" : "IT Specialist",
            "dates" : "2015 to present",
            "description" : "Oversee the day-to-day operation of computer networks including hardware and software support, training, and special projects; Develop, deploy, and manage projects including network related wiring plans, software and hardware purchases, system installation, and hardware and software maintenance and support. Maintain routers, switches, and wiring. Establish and maintain user accounts, profiles, file sharing, access privileges, and security; Assist with the management of upgrades to the company’s telephone systems. Interact with internal clients at all levels to help resolve IT-related issues and provide answers in a timely manner."
        },
        {
            "employer" : "UC Davis Primate Center",
            "title" : "Promgrammer II - IT Support Specialist",
            "dates" : "2015",
            "description" : "Under the direction of the IT Manager, provide computer workstation and IT services support via telephone, e-mail, and in-person at client work areas. Provide support for desktop and laptop computer hardware and peripherals, Windows and Mac operating systems, application software, and in-house applications. Troubleshoot hardware, software, and network connectivity issues using all available tools. Work with team members to manage Windows and Mac client workstations. Plan, purchase, build, initialize and update workstations as new releases, upgrades, patches and hot-fixes become available and approved. Follow documented procedures. Configure workstations to match department or unit specific configurations and to comply with campus security policies. Backup, restore and transfer user data and preferences when applicable. Work with Systems Administrator on research, planning, development, testing and production of server-side hardware and software technologies, including network security, storage, server maintenance and resource management. Assist the IT unit with special projects. Work on short-term and long-term assignments within the IT unit. Document assignments and support incidents in the in-house issue tracking system."
        },
        {
            "employer" : "UC Davis College of Biological Sciences Dean's Office",
            "title" : "Computer Resource Specialist II",
            "dates" : "2010-2015",
            "description" : "Under direction of supervisor, provide computer workstation and IT services support via telephone, e­mail, and in ­person at client work areas. Provide support for desktop and laptop computer hardware and peripherals, Windows and Mac operating systems, application software, and in­ house applications. Troubleshoot hardware, software, and network connectivity issues using all available tools. Work with team members to manage Windows and Mac client workstations. Plan, purchase, build, initialize and update workstations as new releases, upgrades, patches and hot­fixes become available and approved. Follow documented procedures. Configure workstations to match department or unit specific configurations and to comply with campus security policies. Backup, restore and transfer user data and preferences when applicable. Work with Systems Administrator on research, planning, development, testing and production of server­-side hardware and software technologies, including network security, storage, server maintenance and resource management. Assist the IT unit with special projects. Work on short­-term and long­term assignments within the IT unit. Document assignments and support incidents in the in­ house issue tracking system. "
        },
        {
            "employer" : "UC Davis Pulbic Health Sciences Department",
            "title" : "IT Support",
            "dates" : "2009-2010",
            "description" : "Provide computer technical support to departmental users via email, telephone, and in-person. Troubleshoot operating system and software issues on both Windows and Mac OS X. Configure computers based on departmental security and configuration standards. Provide valued customer service to users with a vast range of computer experience. Independently solve daily technical problems."
        },
        {
            "employer" : "UC Davis University Communications",
            "title" : "Computer Tech Support Intern",
            "dates" : "2008-2009",
            "description" : "Diagnose and solve hardware/software faults on both Windows and Mac OS X desktops. Provide valued customer service to users with a vast range of computer experience. Ensure smooth operation of computer resources."
        }
    ]
};

var project = {
    "projects" : [
        {
            "title" : "Build a Portfolio Site",
            "dates" : "2017",
            "description" : "I was provided with a design mockup as a PDF-file and I replicated that design in HTML and CSS. I developed a responsive website that displays images, descriptions and links to each of the portfolio projects I completed throughout the course of the Front-End Web Developer Nanodegree."
            // "images" : ""
        }
        // {
        //     "title" :,
        //     "dates" :,
        //     "description" :,
        //     "images" :,
        // }
    ]
};

// var work = {
//     "title" : "IT Specialist",
//     "employer" : "Bently Enterprises",
//     "dates" : "2015 to present",
//     "location" : "San Francisco"
// };

// var school = {
//     "name" : "University of California Davis",
//     "dates" : "2005 to 2010",
//     "location" : "Davis, CA"
// };



// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
// var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
// var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
// var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
// var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);


// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);
// $("#topContacts").append(formattedMobile);
// $("#topContacts").append(formattedEmail);
// $("#topContacts").append(formattedTwitter);
// $("#topContacts").append(formattedGithub);
// $("#topContacts").append(bio.bioPic);


// $("#main").append(work.title);
// $("#main").append(work.employer);
// $("#main").append(work.dates);
// $("#main").append(work.location);
// $("#main").append(school["name"]);
// $("#main").append(school["dates"]);
// $("#main").append(school["location"]);


