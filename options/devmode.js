function DevMode() {
    // Set the variables
    protect = false;

    // Hide the splash screen element
    const splashScreen = document.getElementById('splash-screen');
    if (splashScreen) {
        splashScreen.style.display = 'none';
    }
}

DevMode();