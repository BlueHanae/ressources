function changeToDark(){
    const selectBody = document.querySelector('body');
    selectBody.classList.toggle('dark');
    
    document.querySelector('#icon-theme').setAttribute("src", "icons/jedi-logo-symbol.png")

    let theme;

    if(selectBody.classList.contains("dark")){
        theme = "Dark";
    }else{
        theme = "Light";
        document.querySelector('#icon-theme').setAttribute("src", "icons/death-star.png")
    }


    localStorage.setItem("Theme", JSON.stringify(theme));
}
const buttonDarkTheme = document.querySelector('#icon-theme');
buttonDarkTheme.addEventListener('click', changeToDark);

let getTheme = JSON.parse(localStorage.getItem("Theme"));

if(getTheme === "Dark"){
    document.body.classList = "dark";
    document.querySelector('#icon-theme').setAttribute("src", "icons/jedi-logo-symbol.png");
}
// localStorage.setItem("theme", "dark-theme");