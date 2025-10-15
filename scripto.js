let isLoginMode = true;

function switchTab(mode) {
    isLoginMode = mode === 'login';

    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    const fullNameField = document.getElementById('fullNameField');
    const educationField = document.getElementById('educationField');
    const branchField = document.getElementById('branchField');
    const forgotPassword = document.getElementById('forgotPassword');
    const submitBtnText = document.getElementById('submitBtnText');
    const fullNameInput = document.getElementById('fullName');
    const educationInput = document.getElementById('educationLevel');
    const branchInput = document.getElementById('branch');

    if (isLoginMode) {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        fullNameField.classList.add('hidden');
        educationField.classList.add('hidden');
        branchField.classList.add('hidden');
        forgotPassword.classList.remove('hidden');
        submitBtnText.textContent = 'Sign In';

        fullNameInput.removeAttribute('required');
        educationInput.removeAttribute('required');
        branchInput.removeAttribute('required');
    } else {
        loginTab.classList.remove('active');
        registerTab.classList.add('active');
        fullNameField.classList.remove('hidden');
        educationField.classList.remove('hidden');
        forgotPassword.classList.add('hidden');
        submitBtnText.textContent = 'Create Account';

        fullNameInput.setAttribute('required', 'required');
        educationInput.setAttribute('required', 'required');
    }
}

function handleEducationChange() {
    const educationLevel = document.getElementById('educationLevel').value;
    const branchField = document.getElementById('branchField');
    const branchInput = document.getElementById('branch');

    if (educationLevel === 'intermediate') {
        branchField.classList.remove('hidden');
        branchField.classList.add('animate-fadeIn');
        branchInput.setAttribute('required', 'required');
    } else {
        branchField.classList.add('hidden');
        branchInput.removeAttribute('required');
        branchInput.value = '';
    }
}

function handleSubmit(event) {
    event.preventDefault();

    const formData = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    if (!isLoginMode) {
        formData.fullName = document.getElementById('fullName').value;
        formData.educationLevel = document.getElementById('educationLevel').value;
        formData.branch = document.getElementById('branch').value;
    }

    console.log('Form submitted:', formData);

    window.location.href = 'index.html';
}

function handleSocialLogin(provider) {
    console.log('Login with ' + provider);
    alert('Social login with ' + provider + ' would be implemented here');
}

document.addEventListener('DOMContentLoaded', function() {
    switchTab('login');
});
