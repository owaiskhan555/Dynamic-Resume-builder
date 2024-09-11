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


