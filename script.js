const mentors = [
    {
      name: "Elroy Dladla",
      skills: ["Analysis"],
      rating: 3,
      description: "Experienced Feature Analyst.",
      contact: "elroy.dladla@standardbank.co.za",
    },
    {
      name: "Mbali Lesenyeho",
      skills: ["Python", "Java", "Salesforce", "Machine Learning"],
      rating: 5,
      description: "Experienced Machine Learning Engineer with expertise in Python and AI.",
      contact: "mbali.lesenyeho@standardbank.co.za",
    },
    {
      name: "Rofhiwa Tshikovhi",
      skills: ["Salesforce"],
      rating: 4,
      description: "Salesforce Developer.",
      contact: "rofhiwa.tshikovi@standardbank.co.za",
    },
    {
      name: "Refilwe Tabohane",
      skills: ["Machine Learning", "AWS"],
      rating: 4.5,
      description: "AWS Cloud Engineer.",
      contact: "refilwe.tabohane@standardbank.co.za",
    },
    {
      name: "Lawrence Matlala",
      skills: ["Machine Learning", "Power Automate"],
      rating: 4.1,
      description: "Power Automate Developer.",
      contact: "lawrence.matlala@standardbank.co.za",
    },
    {
      name: "Takalani Nemadondoni",
      skills: ["Machine Learning", "Power BI"],
      rating: 4.5,
      description: "Data Engineer.",
      contact: "takalani.nemadondoni@standardbank.co.za",
    },
    {
      name: "Thandi Mnisi",
      skills: ["MySQL", "C#"],
      rating: 4,
      description: "Full-stack Developer.",
      contact: "thandi.mnisi@standardbank.co.za",
    },
   ];

   function displayMentors(searchSkill = "") {
    const container = document.getElementById("mentor-container");
    container.innerHTML = "";
    const filteredMentors = mentors.filter((mentor) =>
      mentor.skills.some((skill) =>
        skill.toLowerCase().includes(searchSkill.toLowerCase())
      )
    );
    if (filteredMentors.length === 0) {
      container.innerHTML = "<p>No mentors found.</p>";
      return;
    }
    filteredMentors.forEach((mentor) => {
      const card = document.createElement("div");
      card.className = "mentor-card";
      card.innerHTML = `
   <h3>${mentor.name}</h3>
   <p><strong>Skills:</strong> ${mentor.skills.join(", ")}</p>
   <p><strong>Rating:</strong> ${"⭐".repeat(mentor.rating)}</p>
   <button onclick="viewProfile('${mentor.name}')">View Profile</button>
      `;
      container.appendChild(card);
    });
   }
   document.getElementById("search-button").addEventListener("click", () => {
    const searchSkill = document.getElementById("search-bar").value;
    displayMentors(searchSkill);
   });
   function viewProfile(name) {

    const mentor = mentors.find((m) => m.name === name);
  
    if (mentor) {
  
      localStorage.setItem("selectedMentor", JSON.stringify(mentor));
  
      window.location.href = "mentor-profile.html"; // Redirect to profile page
  
    }
  } 

   document.addEventListener("DOMContentLoaded", () => {
    const mentor = JSON.parse(localStorage.getItem("selectedMentor"));
    if (mentor) {
      document.getElementById("mentor-name").textContent = mentor.name;
      document.getElementById("mentor-description").textContent =
        mentor.description;
      document.getElementById("mentor-contact").textContent = mentor.contact;
      document.getElementById("book-meeting").addEventListener("click", () => {
        window.open(
          `https://teams.microsoft.com/l/meeting/new?subject=Meeting%20with%20${mentor.name}`,
          "_blank"
        );
      });
    }
   });