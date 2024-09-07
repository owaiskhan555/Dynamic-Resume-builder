// Ensure elements exist by using type assertions
var toggleButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add event listener to toggle visibility
if (toggleButton && skillsSection) {
    toggleButton.addEventListener('click', function () {
        if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
            skillsSection.style.display = 'block';
        }
        else {
            skillsSection.style.display = 'none';
        }
    });
}
else {
    console.error('Toggle button or skills section not found');
}
