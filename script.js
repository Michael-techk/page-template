const themes = document.getElementsByName('theme')
const svgs = document.querySelectorAll('.tile-img')
const theSwitch = document.querySelector('.switch')
const menuSvg = document.querySelector('.mode-item .fas')
//function changing svgs, text and local storage
function darkOrLigth(mode,color1,color2,menuSvg1,menuSvg2) {
    localStorage.setItem('theme', mode);
    document.querySelector('.mode-item:nth-child(1)').innerHTML = `${mode} Mode`;
    menuSvg.classList.replace(menuSvg1, menuSvg2);
    svgs.forEach(svg=> svg.setAttribute('src',svg.getAttribute("src").replace(color1, color2)))
}
//function wchich is switching modes
const switchModes = () => {
    //setting up flag and switching colors
    let flag = theSwitch.classList.contains('dark');
    themes.forEach(theme => flag ? theme.classList.remove('dark') : theme.classList.add('dark'));
    //dark mode
    if(!flag) darkOrLigth('Dark','red','purple','fa-sun','fa-moon');
    //ligth mode 
    else if(flag) darkOrLigth('Ligth','purple','red','fa-moon','fa-sun');
    //change flag
    flag ? theSwitch.classList.remove('dark') : theSwitch.classList.add('dark');
} 
//switch listener
theSwitch.addEventListener('click', switchModes);
//local storage
const currentTheme = localStorage.getItem('theme');
  if(currentTheme === 'Dark')switchModes();