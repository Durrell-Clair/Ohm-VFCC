// Gestion de la navigation entre les différentes pages
btnPage4Colors.addEventListener('click', () => {
    
    pageFourth.style.display = 'block';
    btnPage4Colors.style.backgroundColor = 'rgba(255, 255, 0, 0.445)';
    btnPage4Colors.style.color = 'black';
    btnValue4.style.display = 'block';

    pageFive.style.display = 'none';
    btnValue5.style.display = 'none';
    btnPage5Colors.style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
    btnPage5Colors.style.color = 'white';

    pageSix.style.display = 'none';
    btnValue6.style.display = 'none';
    btnPage6Colors.style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
    btnPage6Colors.style.color = 'white';
    
})

btnPage5Colors.addEventListener('click', () => {
    
    pageFive.style.display = 'block';
    btnPage5Colors.style.backgroundColor = 'rgba(255, 255, 0, 0.445)';
    btnPage5Colors.style.color = 'black';
    btnValue5.style.display = 'block';

    pageFourth.style.display = 'none';
    btnValue4.style.display = 'none';
    btnPage4Colors.style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
    btnPage4Colors.style.color = 'white';

    pageSix.style.display = 'none';
    btnValue6.style.display = 'none';
    btnPage6Colors.style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
    btnPage6Colors.style.color = 'white';
    
})

btnPage6Colors.addEventListener('click', () => {

    pageSix.style.display = 'block';
    btnPage6Colors.style.backgroundColor = 'rgba(255, 255, 0, 0.445)';
    btnPage6Colors.style.color = 'black';
    btnValue6.style.display = 'block';

    pageFourth.style.display = 'none';
    btnValue4.style.display = 'none';
    btnPage4Colors.style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
    btnPage4Colors.style.color = 'white';
    
    pageFive.style.display = 'none';
    btnValue5.style.display = 'none';
    btnPage5Colors.style.backgroundColor = 'rgba(0, 0, 0, 0.671)';
    btnPage5Colors.style.color = 'white';

})


//-------------------------------- Gestions des Listes des couleurs et des types de résistances-----------------------------------------//

// # Résistance à 4 couleurs
firstColorListPage4.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 1

    let color = getColor(firstColorListPage4); // On récupère la couleur sélectionnée
    setColor(firstResistorColorPage4, color);  // On l'attribut à l'anneau approprié

})

secondColorListPage4.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 2

    let color = getColor(secondColorListPage4); // On récupère la couleur sélectionnée
    setColor(secondResistorColorPage4, color);  // On l'attribut à l'anneau approprié

})

thirdColorListPage4.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 3

    let color = getColor(thirdColorListPage4); // On récupère la couleur sélectionnée
    setColor(thirdResistorColorPage4, color);  // On l'attribut à l'anneau approprié

})

fourthColorListPage4.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 4

    let color = getColor(fourthColorListPage4); // On récupère la couleur sélectionnée
    setColor(fourthResistorColorPage4, color);  // On l'attribut à l'anneau approprié

})

// # Résistance à 5 couleurs
firstColorListPage5.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 1

    let color = getColor(firstColorListPage5); // On récupère la couleur sélectionnée
    setColor(firstResistorColorPage5, color);  // On l'attribut à l'anneau approprié

})

secondColorListPage5.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 2

    let color = getColor(secondColorListPage5); // On récupère la couleur sélectionnée
    setColor(secondResistorColorPage5, color);  // On l'attribut à l'anneau approprié

})

thirdColorListPage5.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 3

    let color = getColor(thirdColorListPage5); // On récupère la couleur sélectionnée
    setColor(thirdResistorColorPage5, color);  // On l'attribut à l'anneau approprié

})

fourthColorListPage5.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 4

    let color = getColor(fourthColorListPage5); // On récupère la couleur sélectionnée
    setColor(fourthResistorColorPage5, color);  // On l'attribut à l'anneau approprié

})

fiveColorListPage5.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 5

    let color = getColor(fiveColorListPage5); // On récupère la couleur sélectionnée
    setColor(fiveResistorColorPage5, color);  // On l'attribut à l'anneau approprié

})

// # Résistance à 6 couleur
firstColorListPage6.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 1

    let color = getColor(firstColorListPage6); // On récupère la couleur sélectionnée
    setColor(firstResistorColorPage6, color);  // On l'attribut à l'anneau approprié

})

secondColorListPage6.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 2

    let color = getColor(secondColorListPage6); // On récupère la couleur sélectionnée
    setColor(secondResistorColorPage6, color);  // On l'attribut à l'anneau approprié

})

thirdColorListPage6.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 3

    let color = getColor(thirdColorListPage6); // On récupère la couleur sélectionnée
    setColor(thirdResistorColorPage6, color);  // On l'attribut à l'anneau approprié

})

fourthColorListPage6.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 4

    let color = getColor(fourthColorListPage6); // On récupère la couleur sélectionnée
    setColor(fourthResistorColorPage6, color);  // On l'attribut à l'anneau approprié

})

fiveColorListPage6.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 5

    let color = getColor(fiveColorListPage6); // On récupère la couleur sélectionnée
    setColor(fiveResistorColorPage6, color);  // On l'attribut à l'anneau approprié

})

sixColorListPage6.addEventListener('click', () => {  // Au click sur l'une des couleurs pour l'anneau 5

    let color = getColor(sixColorListPage6); // On récupère la couleur sélectionnée
    setColor(sixResistorColorPage6, color);  // On l'attribut à l'anneau approprié

})

// -----------------------------------------------------------Gestion des bouttons de commandes----------------------------------------- //

// Bouton de commande pour les résistances à 4 couleurs

btnValue4.addEventListener('click', () => {                             // Après avoir cliqué sur le boutton

    if (allColorsSelected(4)) {                                         // Si toutes les couleurs ont été précisées

        let resistor = getResistorFeatures(4);                          // On récupère les caractéristiques de la résistance

        displayResistorFatures(resistor, 4);                            // Puis on les affiches

    } 
    else {                                                              // Si toutes les couleurs n'ont pas été précisées

        alert("Vous devez préciser les couleurs de tous les anneaux."); // On notifie l'utilisateur

    }

})

// Bouton de commande pour les résistances à 5 couleurs
btnValue5.addEventListener('click', () => {                             // Après avoir cliqué sur le boutton

    if (allColorsSelected(5)) {                                         // Si toutes les couleurs ont été précisées

        let resistor = getResistorFeatures(5);                          // On récupère les caractéristiques de la résistance

        displayResistorFatures(resistor, 5);                            // Puis on les affiches

    } 
    else {                                                              // Si toutes les couleurs n'ont pas été précisées

        alert("Vous devez préciser les couleurs de tous les anneaux."); // On notifie l'utilisateur
        
    }

})

// Bouton de commande pour les résistances à 6 couleurs
btnValue6.addEventListener('click', () => {                             // Après avoir cliqué sur le boutton

    if (allColorsSelected(6)) {                                         // Si toutes les couleurs ont été précisées

        let resistor = getResistorFeatures(6);                          // On récupère les caractéristiques de la résistance

        displayResistorFatures(resistor, 6);                            // Puis on les affiches

    } 
    else {                                                              // Si toutes les couleurs n'ont pas été précisées

        alert("Vous devez préciser les couleurs de tous les anneaux."); // On notifie l'utilisateur
        
    }

})