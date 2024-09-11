// global.d.ts
export {};

declare global {
  interface Window {
    jspdf: any;
  }
}

interface ResumeData {
    name: string;
    email: string;
    phone:string;
    education:string;
    experience: string;
    skills:string;
}


function generateResume(event:Event): void {
        event.preventDefault();


    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;


    const resumeData: ResumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills
    };

    const preview = document.getElementById('resume-preview');
    if (preview) {
        preview.innerHTML = `
            <h2>${resumeData.name}</h2>
            <p>Email: ${resumeData.email}</p>
            <p>phone: ${resumeData.phone}</p>
            <h3>Education</h3>
            <p>${resumeData.education}</p>
            <h3>Experience</h3>
            <p>${resumeData.experience}</p>
            <h3>skills</h3>
            <p>${resumeData.skills}</p>
        `;
    }
     // Attach click event to download PDF button
     const downloadButton = document.getElementById('download-pdf');
     if (downloadButton) {
        downloadButton.style.display="block"
       downloadButton.addEventListener('click', () => downloadPDF(resumeData));
     }
   }
 
 // Function to download the resume as a PDF
 function downloadPDF(resumeData: ResumeData): void {
   // Import jsPDF from the window object
   const { jsPDF } = window.jspdf;
 
   // Create a new jsPDF instance
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
// Attach the event listener to the form after the DOM has loaded
window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form');
    if (form) {
      form.addEventListener('submit', generateResume);
    }
  });