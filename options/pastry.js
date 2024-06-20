// Pass
let protect = true;
if (protect == true) {
        const correctPassword = 'pastry';

        const userPassword = prompt('Please enter the password to access this site:');
        if (userPassword === correctPassword) {
            document.getElementById('protectedContent').classList.remove('hidden');
        } else {
            alert('Incorrect password. Access denied.');
            // Optionally, redirect to another page or close the tab
			window.location.href = 'https://google.com'; // Replace with a URL of your choice
        }
}