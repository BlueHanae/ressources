
function changeToDark(event){
    event.preventDefault();
    const selectHeader = document.querySelector('header')
    selectHeader.classList.toggle('dark')
    const selectBody = document.querySelector('body');
    selectBody.classList.toggle('dark');
    if(!selectBody.classList.contains("dark")){
        localStorage.setItem("theme", "light-mode");
    }else{
        localStorage.setItem("theme", "dark-mode");
    }
}
const buttonDarkTheme = document.querySelector('#icon-theme');
buttonDarkTheme.addEventListener('click', changeToDark);

// localStorage.setItem("theme", "dark-theme");