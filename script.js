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

    // Button erstellen, um die Einkaufsliste zu generieren
    const button = document.createElement('button');
    button.textContent = 'Einkaufsliste erstellen';
    button.addEventListener('click', erstelleEinkaufsliste);

    // Button am Ende des Abschnitts hinzufügen, damit er unter allen Checkboxen ist
    recipeSection.appendChild(button);
}

// Aufrufen der Funktion beim Laden der Seite
document.addEventListener('DOMContentLoaded', zeigeRezeptAuswahl);

// Funktion zur Erstellung der Einkaufsliste
function erstelleEinkaufsliste() {
    const selectedRecipes = []; // Array für ausgewählte Rezepte
    const shoppingList = {}; // Objekt für Einkaufsliste

    // Gehe durch alle Checkboxes und prüfe, ob sie ausgewählt sind
    rezepte.forEach((rezept, index) => {
        const checkbox = document.getElementById(`rezept-${index}`);
        if (checkbox.checked) {
            selectedRecipes.push(rezept);
        }
    });

    // Zutaten der ausgewählten Rezepte zur Einkaufsliste hinzufügen
    selectedRecipes.forEach(rezept => {
        rezept.zutaten.forEach(zutat => {
            if (shoppingList[zutat]) {
                shoppingList[zutat] += 1; // Menge erhöhen, falls Zutat bereits vorhanden
            } else {
                shoppingList[zutat] = 1; // Zutat hinzufügen, falls noch nicht vorhanden
            }
        });
    });

    // Einkaufsliste im HTML anzeigen
    const shoppingListSection = document.getElementById('shopping-list');
    shoppingListSection.innerHTML = ''; // Abschnitt leeren, falls bereits eine Liste vorhanden ist

    // Überschrift hinzufügen
    const title = document.createElement('h3');
    title.textContent = "Deine Einkaufsliste";
    shoppingListSection.appendChild(title);

    // Zutaten anzeigen
    for (const [zutat, menge] of Object.entries(shoppingList)) {
        const listItem = document.createElement('p');
        listItem.textContent = `${zutat}: ${menge}`;
        shoppingListSection.appendChild(listItem);
    }
}

// Button hinzufügen, um die Einkaufsliste zu generieren
const button = document.createElement('button');
button.textContent = 'Einkaufsliste erstellen';
button.addEventListener('click', erstelleEinkaufsliste);
document.getElementById('recipe-selection').appendChild(button);
