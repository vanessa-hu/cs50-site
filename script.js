

//Document.querySelector('#reset-btn').onclick = lang_button_click('#reset');
//Document.querySelector('#japanese-btn').onclick = lang_button_click('#japanese');

Document.querySelector('#chinese-btn').onclick = function() {
     //Document.querySelector("#chinese").style.visibility='visible';
    Document.querySelector('#chinese-btn').style.display = "none";

//}



function lang_button_click(language) {

    let sections = ['reset','chinese','spanish','tajik','japanese'];

    alert(language);
    for (var i = 0; i < sections.length; i++) {
        if (sections[i].equals(language) == false) {
            document.getElementById(sections[i]).style.display="none";
        }
        else {
           document.getElementById(sections[i]).style.display="block";
           // https://www.w3schools.com/cssref/pr_class_visibility.asp
           //https://www.w3schools.com/cssref/pr_class_display.asp
           //https://stackoverflow.com/questions/31960980/passing-string-parameter-in-javascript-function
        }
    }


}


document.getElementbyId('reset-btn').onclick = lang_button_click('reset');
//document.getElementbyId('chinese-btn').onclick = alert('chinese');
document.getElementbyId('japanese-btn').onclick = lang_button_click('japanese');
document.getElementbyId('tajik-btn').onclick = lang_button_click('tajik');
document.getElementbyId('spanish-btn').onclick = lang_button_click('spanish');