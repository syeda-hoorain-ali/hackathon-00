import { User } from "./types";

const logo = document.getElementById('logo') as HTMLSpanElement;
const profileImg = document.getElementById('profileImg') as HTMLImageElement;
const names = document.querySelector('.main-title .highlight') as HTMLSpanElement;
const profession = document.querySelector('.subtitle .web-dev') as HTMLSpanElement;
const github = document.getElementById('github') as HTMLAnchorElement;
const linkedin = document.getElementById('linkedin') as HTMLAnchorElement;
const website = document.getElementById('website') as HTMLAnchorElement;
const aboutImg = document.getElementById('aboutImg') as HTMLImageElement;
const about = document.getElementById('about') as HTMLParagraphElement;
const footer = document.getElementById('footer') as HTMLDivElement;



const getUserData = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const uniqueID = urlParams.get('id');
    if (!uniqueID) return;

    const jsonData = localStorage.getItem(uniqueID);
    if (!jsonData) return;

    const userData: User = JSON.parse(jsonData);
    console.log(userData)


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

}

document.addEventListener('load', getUserData)
getUserData()