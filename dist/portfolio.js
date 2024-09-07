const logo = document.getElementById('logo');
const profileImg = document.getElementById('profileImg');
const names = document.querySelector('.main-title .highlight');
const profession = document.querySelector('.subtitle .web-dev');
const github = document.getElementById('github');
const linkedin = document.getElementById('linkedin');
const website = document.getElementById('website');
const aboutImg = document.getElementById('aboutImg');
const about = document.getElementById('about');
const footer = document.getElementById('footer');
const getUserData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueID = urlParams.get('id');
    if (!uniqueID)
        return;
    const jsonData = localStorage.getItem(uniqueID);
    if (!jsonData)
        return;
    const userData = JSON.parse(jsonData);
    console.log(userData);
    logo.innerText = userData.name + ' ✨';
    names.innerText = userData.name;
    profileImg.src = userData.profilePic;
    profileImg.alt = userData.name;
    profession.innerText = userData.profession;
    github.href = userData.githubUrl;
    linkedin.href = userData.linkedinUrl;
    website.href = userData.websiteUrl;
    aboutImg.src = userData.profilePic;
    aboutImg.alt = userData.name;
    about.innerText = userData.about;
    footer.innerHTML = `
    <a href="${userData.githubUrl}">
        <i class="fa-brands fa-github"></i>
    </a>
    <a href="${userData.linkedinUrl}">
        <i class="fa-brands fa-linkedin"></i>
    </a>
    <a href="${userData.websiteUrl}">
        <i class="fa-solid fa-globe"></i>
    </a>`;
};
document.addEventListener('load', getUserData);
getUserData();
export {};
