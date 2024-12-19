// Funktio lomakkeen lähettämiselle
function lomakeLähetetty() {
    // Haetaan lomakkeen kenttien arvot
    const nimi = document.getElementById("nimi").value;
    const puhnro = document.getElementById("puhnro").value;
    const sposti = document.getElementById("sposti").value;
    const palaute = document.getElementById("palaute").value;

    // Tarkistetaan, että kaikki kentät on täytetty
    if (nimi && puhnro && sposti) {
        // Lomakkeen lähetys onnistui, näytetään alert-ikkuna
        alert("Kiitos, lomake lähetetty onnistuneesti! Olen sinuun yhteydessä tuota pikaa!");

        // Tyhjennetään lomake (valinnainen)
        document.getElementById("lomake").reset();
    } else {
        // Jos joku kenttä jää täyttämättä, varoitetaan käyttäjää
        alert("Täytä kaikki pakolliset kentät ennen lähettämistä!");
    }
}