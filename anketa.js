function showData() {
    var userName = document.getElementById('name').value;
    var gender = "не указан";
    if (document.getElementById('pol_f').checked) {
        gender = "женский";
    } else if (document.getElementById('pol_m').checked) {
        gender = "мужской";
    }
    var kurs = document.getElementById('kurs').value;
var langText = "";
if (document.getElementById('lang_pas').checked) {
    langText = langText + "Паскаль, ";
}
if (document.getElementById('lang_c').checked) {
    langText = langText + "СИ, ";
}
if (document.getElementById('lang_asm').checked) {
    langText = langText + "Ассемблер, ";
}
if (langText == "") {
    langText = "не указаны";
}
    var result="<h3>Данные анкеты:</h3>"+
               "<p>Имя: "+userName+"</p>"+
               "</p>Пол: "+gender+"</p>"+
               "</p>Курс: "+kurs+"</p>"+
               "<p>Языки: "+langText+"<p>";
    document.getElementById('result').innerHTML = result;
}
    function clearResult(){
        document.getElementById('result').innerHTML = "";
    }
