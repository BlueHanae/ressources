function changeToDark(event){
    event.preventDefault();

    const selectBody = document.querySelector('body');
    selectBody.classList.toggle('dark-body');
}
const buttonDarkTheme = document.querySelector('#dark-mode-icon');
buttonDarkTheme.addEventListener('click', changeToDark);

// localStorage.setItem("theme", "dark-theme");