// Hakee JSON-tiedoston datan
fetch('https://raw.githubusercontent.com/GreMiMa/kokoava/refs/heads/main/quotes.json')
    .then(response => response.json()) // Muuntaa datan JSON-muotoon
    .then(data => {
        // Valitaan satunnainen lainaus
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        // Näytetään lainaus ja kirjoittaja HTML-sivulla
        document.getElementById("quote").innerText = `"${randomQuote.quote}"`;
        document.getElementById("author").innerText = `- ${randomQuote.author}`;
    })
    .catch(error => console.error("Virhe JSON-tiedoston latauksessa:", error));