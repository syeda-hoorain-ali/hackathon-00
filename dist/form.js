const portfolioForm = document.getElementById('portfolioForm');
const generateUniqueID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};
const storeUserData = (userData) => {
    const uniqueID = generateUniqueID();
    localStorage.setItem(uniqueID, JSON.stringify(userData));
    return uniqueID;
};
portfolioForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Helper function to get the value of an input field and trim it
    const getInputValue = (id) => document.getElementById(id)?.value.trim() ?? '';
    const user = {
        username: getInputValue('username'),
        email: getInputValue('email'),
        name: getInputValue('name'),
        profilePic: getInputValue('profilePic'),
        profession: getInputValue('profession'),
        about: getInputValue('about'),
        githubUrl: getInputValue('githubUrl'),
        linkedinUrl: getInputValue('linkedinUrl'),
        websiteUrl: getInputValue('websiteUrl'),
    };
    // Array of required fields with their respective names for error messages
    const requiredFields = [
        { field: user.username, name: 'username' },
        { field: user.email, name: 'email' },
        { field: user.name, name: 'name' },
        { field: user.profilePic, name: 'profile picture URL' },
        { field: user.profession, name: 'profession' },
        { field: user.about, name: 'about yourself' },
        { field: user.githubUrl, name: 'GitHub URL' },
        { field: user.linkedinUrl, name: 'LinkedIn URL' },
        { field: user.websiteUrl, name: 'website URL' }
    ];
    // Validate all required fields
    for (const { field, name } of requiredFields) {
        if (!field) {
            alert(`Please enter your ${name}`);
            return;
        }
    }
    const uniqueID = storeUserData(user);
    window.location.href = `/portfolio?id=${uniqueID}`;
});
const getUserData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueID = urlParams.get('id');
    if (!uniqueID)
        return;
    const jsonData = localStorage.getItem(uniqueID);
    if (!jsonData)
        return;
    const userData = JSON.parse(jsonData);
    const setInputValue = (id, value) => document.getElementById(id).value = value;
    setInputValue('username', userData.username);
    setInputValue('email', userData.email);
    setInputValue('name', userData.name);
    setInputValue('profilePic', userData.profilePic);
    setInputValue('profession', userData.profession);
    setInputValue('about', userData.about);
    setInputValue('githubUrl', userData.githubUrl);
    setInputValue('linkedinUrl', userData.linkedinUrl);
    setInputValue('websiteUrl', userData.websiteUrl);
};
document.addEventListener('load', getUserData);
export {};
