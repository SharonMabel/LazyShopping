// Beispiel für Rezepte - kann später dynamisch gemacht werden
const rezepte = [
    { 
        name: "Sushi-Bowl", 
        zutaten: [
            { name: "Reis", menge: "200g", abteilung: "Reis" },
            { name: "Avocado", menge: "1 Stück", abteilung: "Obst und Gemüse" },
            { name: "Lachs", menge: "100g", abteilung: "Fisch" },
            { name: "Sojasauce", menge: "nach Bedarf", abteilung: "Saucen" }
        ] 
    },
    // Weitere Rezepte hier ...
];


// Funktion zum Anzeigen der Rezeptauswahl
function zeigeRezeptAuswahl() {
    const recipeSection = document.getElementById('recipe-selection');

    // Lösche vorherige Inhalte im Bereich (inklusive alter Button)
    recipeSection.innerHTML = '';

    // Rezept-Checkboxen erstellen
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

    // Button erstellen und unter den Rezepten hinzufügen
    const button = document.createElement('button');
    button.textContent = 'Einkaufsliste erstellen';
    button.addEventListener('click', erstelleEinkaufsliste);

    recipeSection.appendChild(button);
}
// Aufrufen der Funktion beim Laden der Seite
document.addEventListener('DOMContentLoaded', zeigeRezeptAuswahl);

// Funktion zur Erstellung der Einkaufsliste
function erstelleEinkaufsliste() {
    const selectedRecipes = [];
    const shoppingList = {};

    // Auswahl der Rezepte
    rezepte.forEach((rezept, index) => {
        const checkbox = document.getElementById(`rezept-${index}`);
        if (checkbox.checked) {
            selectedRecipes.push(rezept);
        }
    });

    // Zutaten zu Einkaufsliste hinzufügen, gruppiert nach Abteilung
    selectedRecipes.forEach(rezept => {
        rezept.zutaten.forEach(zutat => {
            if (!shoppingList[zutat.abteilung]) {
                shoppingList[zutat.abteilung] = [];
            }
            shoppingList[zutat.abteilung].push(`${zutat.name}: ${zutat.menge}`);
        });
    });

    // Einkaufsliste anzeigen, sortiert nach Abteilung
    const shoppingListSection = document.getElementById('shopping-list');
    shoppingListSection.innerHTML = '';

    for (const [abteilung, items] of Object.entries(shoppingList)) {
        const abteilungTitle = document.createElement('h4');
        abteilungTitle.textContent = abteilung;
        shoppingListSection.appendChild(abteilungTitle);

        items.forEach(item => {
            const listItem = document.createElement('p');
            listItem.textContent = item;
            shoppingListSection.appendChild(listItem);
        });
    }
}