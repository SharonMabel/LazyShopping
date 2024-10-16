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
}const rezepte = [
    { 
        name: "Sushi-Bowl", 
        zutaten: [
            { name: "Reis", menge: "200g", abteilung: "Reis" },
            { name: "Avocado", menge: "1 Stück", abteilung: "Obst und Gemüse" },
            { name: "Lachs", menge: "100g", abteilung: "Fisch" },
            { name: "Sojasauce", menge: "nach Bedarf", abteilung: "Saucen" }
        ] 
    },
    {
        name: "Gulasch", 
        zutaten: [
            { name: "Rindfleisch", menge: "500g", abteilung: "Fleisch" },
            { name: "Zwiebeln", menge: "3 Stück", abteilung: "Obst und Gemüse" },
            { name: "Paprika", menge: "2 Stück", abteilung: "Obst und Gemüse" },
            { name: "Tomatenmark", menge: "2 EL", abteilung: "Konserven" }
        ]
    },
    {
        name: "Hähnchen in Zwiebel-Sahne-Soße", 
        zutaten: [
            { name: "Hähnchenbrust", menge: "400g", abteilung: "Fleisch" },
            { name: "Zwiebeln", menge: "2 Stück", abteilung: "Obst und Gemüse" },
            { name: "Sahne", menge: "200ml", abteilung: "Kühlprodukte" },
            { name: "Nudeln", menge: "250g", abteilung: "Pasta" }
        ]
    },
    {
        name: "Wirsing mit Sahne, Speck und Kartoffeln", 
        zutaten: [
            { name: "Wirsing", menge: "1 Kopf", abteilung: "Obst und Gemüse" },
            { name: "Speck", menge: "150g", abteilung: "Fleisch" },
            { name: "Kartoffeln", menge: "500g", abteilung: "Obst und Gemüse" },
            { name: "Sahne", menge: "200ml", abteilung: "Kühlprodukte" }
        ]
    },
    {
        name: "Hähnchen mit Reis", 
        zutaten: [
            { name: "Hähnchenbrust", menge: "400g", abteilung: "Fleisch" },
            { name: "Reis", menge: "200g", abteilung: "Reis" },
            { name: "Gemüse deiner Wahl", menge: "nach Bedarf", abteilung: "Obst und Gemüse" }
        ]
    },
    {
        name: "Oatmeal mit Apfel", 
        zutaten: [
            { name: "Haferflocken", menge: "50g", abteilung: "Getreide" },
            { name: "Milch", menge: "200ml", abteilung: "Kühlprodukte" },
            { name: "Apfel", menge: "1 Stück", abteilung: "Obst und Gemüse" },
            { name: "Honig", menge: "nach Geschmack", abteilung: "Backwaren" }
        ]
    },
    {
        name: "Tomaten-Linsensuppe", 
        zutaten: [
            { name: "Tomaten", menge: "4 Stück", abteilung: "Obst und Gemüse" },
            { name: "Rote Linsen", menge: "150g", abteilung: "Getreide" },
            { name: "Zwiebel", menge: "1 Stück", abteilung: "Obst und Gemüse" },
            { name: "Gemüsebrühe", menge: "500ml", abteilung: "Konserven" }
        ]
    },
    {
        name: "Gebratener Lachs mit Gemüse und Reis", 
        zutaten: [
            { name: "Lachs", menge: "200g", abteilung: "Fisch" },
            { name: "Reis", menge: "150g", abteilung: "Reis" },
            { name: "Gemüse deiner Wahl", menge: "nach Bedarf", abteilung: "Obst und Gemüse" }
        ]
    },
    {
        name: "Thai-Curry mit Hähnchen und Kokosmilch", 
        zutaten: [
            { name: "Hähnchenbrust", menge: "400g", abteilung: "Fleisch" },
            { name: "Kokosmilch", menge: "200ml", abteilung: "Konserven" },
            { name: "Gemüse deiner Wahl", menge: "nach Bedarf", abteilung: "Obst und Gemüse" },
            { name: "Currypaste", menge: "1 EL", abteilung: "Saucen" }
        ]
    },
    {
        name: "Chili con Carne", 
        zutaten: [
            { name: "Hackfleisch", menge: "500g", abteilung: "Fleisch" },
            { name: "Kidneybohnen", menge: "1 Dose", abteilung: "Konserven" },
            { name: "Mais", menge: "1 Dose", abteilung: "Konserven" },
            { name: "Tomaten", menge: "4 Stück", abteilung: "Obst und Gemüse" }
        ]
    }
];
