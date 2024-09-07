
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    const skillsSection = document.getElementById('skills-section') as HTMLElement;
    const toggleArrow = document.getElementById('toggle-arrow') as HTMLElement;
    const skillsList = document.getElementById('skills') as HTMLUListElement;


    form.addEventListener('submit', (event) => {
        event.preventDefault(); 


        const profilePictureInput = document.getElementById("profilePicture");
        const profilePicture = profilePictureInput!.files[0];
        let profilePictureURL = "";
      
        if (profilePicture) {
          profilePictureURL = URL.createObjectURL(profilePicture);
        }



        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const educationDuration = (document.getElementById('Educationduration') as HTMLTextAreaElement).value;
        const workExperience = (document.getElementById('work-experience') as HTMLTextAreaElement).value;
        const workDuration = (document.getElementById('workDuration') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',').map(skill => skill.trim());
        const profile = (document.getElementById('profile') as HTMLTextAreaElement).value;
        const projects = (document.getElementById('projects') as HTMLTextAreaElement).value;
        const projectsDuration = (document.getElementById('projectsDuration') as HTMLTextAreaElement).value;
        const interests = (document.getElementById('interests') as HTMLInputElement).value.split(',').map(interest => interest.trim());


      
        const resumeHtml = `
      <head>
        <link rel="stylesheet" href="styles.css">
    </head>
                <body>

        <header>
            <h1>${name}</h1>
            ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" id="profile-pic" "/>` : ""}
        </header>

        <div class="profile">
            <h2>Profile</h2>
            <p class="profileDescription">${profile}</p>
        </div>

        <div class="two-sections">

            <div>
                <section id="education">
                    <h2>Education</h2>
                    <h3>${education}</h3>
                    <h3>Duration: ${educationDuration}</h3>
                </section>

                <section id="project">
                    <h2>Projects</h2>
                    <div class="project-section">
                        <p>${projects}</p>
                        <h5>Duration: ${projectsDuration}</h5>
                    </div>
                </section>

                <section id="work-experience">
                    <h2>Work Experience</h2>
                    <div>
                    <p><span class="spanMERN">${workExperience}</p>
                    <p>Duration: ${workDuration}</p>
                    </div>

                </section>
            </div>


            <div>

                <section id="skills-section">
                    <h2 id="skills-heading">Skills</h2>
                  
                     <ul id="skills">
                    ${skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </section>

                <section id="work-experience">
                    <h2>Interests</h2>
                    <div class="interestButtons">
                
            ${interests.map(interest => `<button >${interest}</button>`).join('')}
        
                    </div>
                </section>

            </div>

        </div>

        <script src="script.js"></script>
    </body>

        `;

        resumeOutput.innerHTML = resumeHtml;
    });


    const toggleSkills = () => {
        if (skillsSection.style.maxHeight) {
            skillsSection.style.maxHeight = '';
            toggleArrow.style.transform = 'rotate(0deg)';
        } else {
            skillsSection.style.maxHeight = skillsList.scrollHeight + 'px';
            toggleArrow.style.transform = 'rotate(180deg)';
        }
    };

    skillsSection.addEventListener('click', toggleSkills);
});




