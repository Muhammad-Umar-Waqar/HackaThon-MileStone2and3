document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var skillsSection = document.getElementById('skills-section');
    var toggleArrow = document.getElementById('toggle-arrow');
    var skillsList = document.getElementById('skills');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        var profilePictureInput = document.getElementById("profilePicture");
        var profilePicture = profilePictureInput.files[0];
        var profilePictureURL = "";
        if (profilePicture) {
            profilePictureURL = URL.createObjectURL(profilePicture);
        }
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var education = document.getElementById('education').value;
        var educationDuration = document.getElementById('Educationduration').value;
        var workExperience = document.getElementById('work-experience').value;
        var workDuration = document.getElementById('workDuration').value;
        var skills = document.getElementById('skills').value.split(',').map(function (skill) { return skill.trim(); });
        var profile = document.getElementById('profile').value;
        var projects = document.getElementById('projects').value;
        var projectsDuration = document.getElementById('projectsDuration').value;
        var interests = document.getElementById('interests').value.split(',').map(function (interest) { return interest.trim(); });
        var resumeHtml = "\n      <head>\n        <link rel=\"stylesheet\" href=\"styles.css\">\n    </head>\n                <body>\n\n        <header>\n            <h1>".concat(name, "</h1>\n            ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" id=\"profile-pic\" \"/>") : "", "\n        </header>\n\n        <div class=\"profile\">\n            <h2>Profile</h2>\n            <p class=\"profileDescription\">").concat(profile, "</p>\n        </div>\n\n        <div class=\"two-sections\">\n\n            <div>\n                <section id=\"education\">\n                    <h2>Education</h2>\n                    <h3>").concat(education, "</h3>\n                    <h3>Duration: ").concat(educationDuration, "</h3>\n                </section>\n\n                <section id=\"project\">\n                    <h2>Projects</h2>\n                    <div class=\"project-section\">\n                        <p>").concat(projects, "</p>\n                        <h5>Duration: ").concat(projectsDuration, "</h5>\n                    </div>\n                </section>\n\n                <section id=\"work-experience\">\n                    <h2>Work Experience</h2>\n                    <div>\n                    <p><span class=\"spanMERN\">").concat(workExperience, "</p>\n                    <p>Duration: ").concat(workDuration, "</p>\n                    </div>\n\n                </section>\n            </div>\n\n\n            <div>\n\n                <section id=\"skills-section\">\n                    <h2 id=\"skills-heading\">Skills</h2>\n                  \n                     <ul id=\"skills\">\n                    ").concat(skills.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(''), "\n                    </ul>\n                </section>\n\n                <section id=\"work-experience\">\n                    <h2>Interests</h2>\n                    <div class=\"interestButtons\">\n                \n            ").concat(interests.map(function (interest) { return "<button >".concat(interest, "</button>"); }).join(''), "\n        \n                    </div>\n                </section>\n\n            </div>\n\n        </div>\n\n        <script src=\"script.js\"></script>\n    </body>\n\n        ");
        resumeOutput.innerHTML = resumeHtml;
    });
    var toggleSkills = function () {
        if (skillsSection.style.maxHeight) {
            skillsSection.style.maxHeight = '';
            toggleArrow.style.transform = 'rotate(0deg)';
        }
        else {
            skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
            toggleArrow.style.transform = 'rotate(180deg)';
        }
    };
    skillsSection.addEventListener('click', toggleSkills);
});
