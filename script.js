const toggleButton = document.querySelector('.toggle-button');
const leftPanel = document.querySelector('.left-panel');
const rightPanel = document.querySelector('.right-panel');
const overlayLeft = document.querySelector('.overlay-left');
const signInButton = document.getElementById('signIn');
const overlayHeading = document.getElementById('overlay-heading');
const overlayText = document.getElementById('overlay-text');
const overlayHeadingSignup = document.getElementById('overlay-heading-signup');
const overlayTextSignup = document.getElementById('overlay-text-signup');

toggleButton.addEventListener('click', () => {
    leftPanel.classList.toggle('slide-left');
    rightPanel.classList.toggle('slide-left');
    overlayLeft.classList.toggle('slide-left');

    // Check if the left panel is now hidden (i.e., the sign-up view)
    const isSignUpView = leftPanel.classList.contains('slide-left');

    // Update overlay text based on the view
    if (isSignUpView) {
        overlayHeading.classList.add('hidden');
        overlayText.classList.add('hidden');
        overlayHeadingSignup.classList.remove('hidden');
        overlayTextSignup.classList.remove('hidden');
        signInButton.textContent = 'Sign Up';
    } else {
        overlayHeading.classList.remove('hidden');
        overlayText.classList.remove('hidden');
        overlayHeadingSignup.classList.add('hidden');
        overlayTextSignup.classList.add('hidden');
        signInButton.textContent = 'Login';
    }
});

signInButton.addEventListener('click', () => {
    overlayLeft.classList.remove('slide-left');
});
