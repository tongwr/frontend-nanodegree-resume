var bio = {
  "name": "Tong W. Ratanapan",
  "role": "Front-End Ninja",
  "contacts": {
    "mobile": "(+66)818820369",
    "email": "tong.worapol@gmail.com",
    "github": "TongWR",
    "twitter": "TongWRatanapan",
    "location": "Chiang Mai"
  },
  "welcomeMessage": "alert(\"Hello, World!\");",
  "skills": ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Git and GitHub"],
  "biopic": "https://avatars0.githubusercontent.com/u/2169312",
  "display": function() {
    var header = $("#header");
    var topContacts = $("#topContacts");
    var footerContacts = $("#footerContacts");

    /* Display Name and Role */

    // Format Name and Role
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

    // Insert Name and Role into header
    header.prepend(formattedRole);
    header.prepend(formattedName);

    /* Display Contact Details at the Top */
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    topContacts.append(formattedEmail);
    topContacts.append(formattedMobile);
    topContacts.append(formattedTwitter);
    topContacts.append(formattedGithub);
    topContacts.append(formattedLocation);

    /* Display Picture/Welcome Message */
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    header.append(formattedPic);
    header.append(formattedWelcomeMsg);

    /* Display Skills */

    // Insert Skill List before inserting Skills
    header.append(HTMLskillsStart);
    var skillList = $("#skills");

    // Insert Skills using forEach on bio.skills
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      skillList.append(formattedSkill);
    });

    /* Display Contact Details at the Bottom */
    footerContacts.append(formattedEmail);
    footerContacts.append(formattedMobile);
    footerContacts.append(formattedTwitter);
    footerContacts.append(formattedGithub);
    footerContacts.append(formattedLocation);
  }
};

var education = {
  "schools": [{
    "name": "Malaysian Global Innovation & Creativity Centre",
    "location": "Cyberjaya",
    "degree": "Startup Accelerator Program",
    "majors": ["ASEAN Track"],
    "dates": "2015",
    "url": "http://accelerator.mymagic.my/en/asean/"
  }, {
    "name": "National University of Singapore",
    "location": "Singapore",
    "degree": "Bachelor of Engineering",
    "majors": ["Computer Engineering"],
    "dates": "2014",
    "url": "http://www.nus.edu.sg/"
  }, {
    "name": "University of New South Wales",
    "location": "Sydney",
    "degree": "Exchange Program",
    "majors": ["Computer Engineering"],
    "dates": "2013",
    "url": "https://www.unsw.edu.au/"
  }],
  "onlineCourses": [{
    "title": "German",
    "school": "Duolingo",
    "dates": "Ongoing",
    "url": "https://www.duolingo.com/course/de/en/Learn-German-Online"
  }, {
    "title": "Game Theory II: Advanced Applications",
    "school": "Coursera",
    "dates": "2014",
    "url": "https://www.coursera.org/learn/game-theory-2"
  }, {
    "title": "Game Theory",
    "school": "Coursera",
    "dates": "2013",
    "url": "https://www.coursera.org/learn/game-theory-1"
  }],
  "display": function() {
    var eduDiv = $("#education");

    /* Display Schools */
    education.schools.forEach(function(school) {
      // Insert a container div for all information related to that school first
      eduDiv.append(HTMLschoolStart);
      var currentEntry = $(".education-entry:last");

      // Replace twice! First, school name. Second, URL to school website.
      var formattedSchool = HTMLschoolName.replace("%data%", school.name).replace("#", school.url) + HTMLschoolDegree.replace("%data%", school.degree);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajors = HTMLschoolMajor.replace("%data%", school.majors.join([', ']));
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);

      // Then insert all school information to the container div
      currentEntry.append(formattedSchool);
      currentEntry.append(formattedLocation);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedMajors);
    });

    /* Display Online Courses */

    // Insert Header for Online Courses
    eduDiv.append(HTMLonlineClasses);

    // Insert Online Courses
    education.onlineCourses.forEach(function(course) {
      eduDiv.append(HTMLschoolStart);
      var currentEntry = $(".education-entry:last");

      var formattedCourse = HTMLonlineTitle.replace("%data%", course.title) + HTMLonlineSchool.replace("%data%", course.school);
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);

      currentEntry.append(formattedCourse);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedURL);
    });
  }
};

var work = {
  "jobs": [{
    "employer": "flipped (Thailand)",
    "title": "CEO and Co-founder",
    "location": "Chiang Mai",
    "dates": "Nov 2014 - Sep 2016",
    "description": "flipped blah blah blah"
  }, {
    "employer": "Garena",
    "title": "Mobile Game Associate",
    "location": "Bangkok",
    "dates": "May 2014 - Nov 2014",
    "description": "Garena blah blah blah"
  }, {
    "employer": "National University of Singapore",
    "title": "Teaching Assistant",
    "location": "Singapore",
    "dates": "Aug 2013 - Nov 2013",
    "description": "NUS blah blah blah"
  }],
  "display": function() {
    var workDiv = $("#workExperience");

    /* Display Work */
    work.jobs.forEach(function(job) {
      workDiv.append(HTMLworkStart);
      var currentEntry = $(".work-entry:last");

      var formattedWork = HTMLworkEmployer.replace("%data%", job.employer) + HTMLworkTitle.replace("%data%", job.title);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);

      currentEntry.append(formattedWork);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedLocation);
      currentEntry.append(formattedDescription);
    });
  }
};

var projects = {
  "projects": [{
    "title": "flipped 2.0: Virtual TA for High School Maths",
    "dates": "Mar 2016 - Sep 2016",
    "description": "flipped 2.0 blah blah",
    "images": ["images/1.jpg", "images/2.jpg", "images/3.jpg"]
  }, {
    "title": "Incentive-based Cloud Pricing for Improved Resource Utilization and Revenue",
    "dates": "Aug 2013 - Apr 2014",
    "description": "Cloud Pricing blah blah",
    "images": ["images/4.jpg", "images/5.jpg"]
  }, {
    "title": "Embedded Systems Design Project - Hypermarket",
    "dates": "Aug 2012 - Dec 2012",
    "description": "Hypermartket blah blah",
    "images": ["images/6.jpg"]
  }],
  "display": function() {
    var projDiv = $("#projects");

    /* Display Projects */
    projects.projects.forEach(function(project) {
      projDiv.append(HTMLprojectStart);
      var currentEntry = $(".project-entry:last");

      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);

      currentEntry.append(formattedTitle);
      currentEntry.append(formattedDates);
      currentEntry.append(formattedDescription);

      // Oh look! forEach inside forEach because each project can have more than 1 image
      project.images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace("%data%", image);
        currentEntry.append(formattedImage);
      });
    });
  }
};

/* function for displaying Google Maps
Could have done without a function
But decided to do this for the sake of modularity and consistency */
var displayMap = function() {
  var map = $("#mapDiv");
  map.append(googleMap);
};

$(function() {
  bio.display();
  work.display();
  projects.display();
  education.display();
  displayMap();
});