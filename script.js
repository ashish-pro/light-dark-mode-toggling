const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');

// Dark Light Images 
function imageMode(color){
    img1.src = `./img/undraw_proud_coder_${color}.svg`;
    img2.src = `./img/undraw_feeling_proud_${color}.svg`;
    img3.src = `./img/undraw_conceptual_idea_${color}.svg`;  
}

// Dark Mode Styles
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    // toggleIcon.children[1].classList.remove('fa-sun');  this both can be optimised using replace function
    // toggleIcon.children[1].classList.add('fa-moon'); 
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');  

    // Rather Thean Hardcoding and repeating img src we can optimise using string liiteral and function
    // Which is created above imageMode()
    // img1.src = './img/undraw_proud_coder_dark.svg';
    // img2.src = './img/undraw_feeling_proud_dark.svg';
    // img3.src = './img/undraw_conceptual_idea_dark.svg'; 
    
    imageMode('dark');
}

// Light Mode Styles
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    //toggleIcon.children[1].classList.remove('fa-moon');
    // toggleIcon.children[1].classList.add('fa-sun');
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');  
    // img1.src = './img/undraw_proud_coder_light.svg';
    // img2.src = './img/undraw_feeling_proud_light.svg';
    // img3.src = './img/undraw_conceptual_idea_light.svg';
       imageMode('light'); 
 }

// Switch Theme Dynamically

function switchTheme(event){
    if(event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
        darkMode();
    }else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
        lightMode();
    }

}
// Event Listeners
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme); 
    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
        darkMode();
    }
}