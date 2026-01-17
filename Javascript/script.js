document.addEventListener('DOMContentLoaded', () => {
    // Select all dropdown trigger links
    const dropdownTriggers = document.querySelectorAll('.has-dropdown > a');

    dropdownTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent page jump
            
            const parentLi = this.parentElement;
            // Toggle the 'active' class on the clicked item
            parentLi.classList.toggle('active');
        });
    });

    // Close dropdowns if user clicks anywhere outside of them
    document.addEventListener('click', function(e) {
        dropdownTriggers.forEach(trigger => {
            const parentLi = trigger.parentElement;
            
            // Check if click was outside the dropdown AND outside the link itself
            if (!parentLi.contains(e.target)) {
                parentLi.classList.remove('active');
            }
        });
    });
});