function lang_click(language) {

    var lang = document.getElementById(language);
    if (lang.style.display == "block") {
        lang.style.display = "none";
    }
    else {
        lang.style.display = "block";
    }


}