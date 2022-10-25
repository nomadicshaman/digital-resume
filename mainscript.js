let root = document.documentElement;
function lightTheme () {
    root.style.setProperty('--mainTextColor', 'var(--mainTextColor-light)');
    root.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-light)');
    root.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-light)');
    root.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-light)');
    root.style.setProperty('--mainBgColor', 'var(--mainBgColor-light)');
}

function darkTheme () {
    root.style.setProperty('--mainTextColor', 'var(--mainTextColor-dark)');
    root.style.setProperty('--secondaryTextColor', 'var(--secondaryTextColor-dark)');
    root.style.setProperty('--mainLinkColor', 'var(--mainLinkColor-dark)');
    root.style.setProperty('--mainBorderColor', 'var(--mainBorderColor-dark)');
    root.style.setProperty('--mainBgColor', 'var(--mainBgColor-dark)');
}


let profilePicture = document.querySelector('#profile-pic');


function change () {
    profilePicture.src = "./assets/images/pixel.jpeg"
}

function changeOut () {
    profilePicture.src = "./assets/images/profile.png"
}

/*
for adding multilanguage support later
let language = {
    eng: {
        title: "About"

    },
    tr: { title: "Hakkımda"

    }
};

function changeLanguage () {
        abbout.textContent = language.tr.title;
}
*/