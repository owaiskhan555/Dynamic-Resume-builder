// Ensure elements exist by using type assertions
const toggleButton = document.getElementById(
    "toggle-skills"
) as HTMLButtonElement;
const skillsSection = document.getElementById("skills") as HTMLElement;

// Add event listener to toggle visibility
if (toggleButton && skillsSection) {
    toggleButton.addEventListener("click", () => {
        if (
            skillsSection.style.display === "none" ||
            skillsSection.style.display === ""
        ) {
            skillsSection.style.display = "block";
        } else {
            skillsSection.style.display = "none";
        }
    });
} else {
    console.error("Toggle button or skills section not found");
}

// Import jsPDF from its module
import { jsPDF } from "jspdf";

// Define an interface for the resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

// Function to get the input values safely
function getInputValue(id: string): string {
    const input = document.getElementById(id) as HTMLInputElement | null;
    return input ? input.value : "";
}

// Function to generate the resume PDF
function generateResume(): void {
    // Collect form data
    const resumeData: ResumeData = {
        name: getInputValue("name"),
        email: getInputValue("email"),
        phone: getInputValue("phone"),
        // summary: getInputValue("summary"),
        education: getInputValue("education"),
        experience: getInputValue("experience"),
        skills: getInputValue("skills"),
    };

    // Initialize jsPDF
    const doc = new jsPDF();

    // Add data to the PDF
    doc.setFontSize(16);
    doc.text(resumeData.name, 20, 20);
    doc.setFontSize(12);
    doc.text(`Email: ${resumeData.email}`, 20, 30);
    doc.text(`Phone: ${resumeData.phone}`, 20, 40);

    doc.setFontSize(14);
    doc.text("Education", 20, 80);
    doc.setFontSize(12);
    doc.text(resumeData.education, 20, 90, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("Experience", 20, 110);
    doc.setFontSize(12);
    doc.text(resumeData.experience, 20, 120, { maxWidth: 170 });

    doc.setFontSize(14);
    doc.text("Skills", 20, 140);
    doc.setFontSize(12);
    doc.text(resumeData.skills, 20, 150, { maxWidth: 170 });

    // Save the PDF
    doc.save(`${resumeData.name}_Resume.pdf`);
}

// Add event listener to the button
document
    .getElementById("generateResumeBtn")?.addEventListener("click", generateResume);
