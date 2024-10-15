// Beispiel für Rezepte - kann später dynamisch gemacht werden
const rezepte = [
    { name: "Sushi-Bowl", zutaten: ["Reis", "Avocado", "Lachs", "Sojasauce"] },
    { name: "Gulasch", zutaten: ["Rindfleisch", "Zwiebeln", "Paprika", "Tomatenmark"] },
    { name: "Zwiebelbaguette mit Salat", zutaten: ["Baguette", "Zwiebeln", "Salat", "Tomaten"] }
];

// Funktion zum Anzeigen der Rezeptauswahl
function zeigeRezeptAuswahl() {
    const recipeSection = document.getElementById('recipe-selection');
    
    rezepte.forEach((rezept, index) => {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `rezept-${index}`;
        checkbox.value = rezept.name;

        const label = document.createElement('label');
        label.htmlFor = `rezept-${index}`;
        label.textContent = rezept.name;

        recipeSection.appendChild(checkbox);
        recipeSection.appendChild(label);
        recipeSection.appendChild(document.createElement('br'));
    });
}

// Aufrufen der Funktion beim Laden der Seite
document.addEventListener('DOMContentLoaded', zeigeRezeptAuswahl);
