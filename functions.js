// Ici sont définis toutes les fonctions utiles au fonctionnement de notre programme

// Fonction renvoyant la coleur selectionnée
function getColor(list) {
    
    let color;

    switch (list.options[list.selectedIndex].innerHTML) {
        case 'Noir':
            color = 'black';
            break;
        case 'Brun':
            color = 'brown';
            break;
        case 'Rouge':
            color = 'red';
            break;
        case 'Orange':
            color = 'orange';
            break;
        case 'Jaune':
            color = 'yellow';
            break;
        case 'Vert':
            color = 'green';
            break;
        case 'Bleu':
            color = 'blue';
            break;
        case 'Violet':
            color = 'violet';
            break;
        case 'Gris':
            color = 'grey'
            break;
        case 'Blanc':
            color = 'white';
            break;
        case 'Or':
            color = 'gold';
            break;
        case 'Argent':
            color = 'silver';
            break;
        default:
            color = 'transparent';
            break;
    }

    return color;

}

// Fonction modifiant la couleur d'un anneau d'un type de résistance donné
function setColor(ring, color) {
    
    ring.style.backgroundColor = color;

}

// Fonction revoyant true si les couleurs de tous les anneaux ont été précisés
function allColorsSelected(numberOfRings) {
    
    const colors4 = [firstColorListPage4, secondColorListPage4, thirdColorListPage4, fourthColorListPage4],
          colors5 = [firstColorListPage5, secondColorListPage5, thirdColorListPage5, fourthColorListPage5, fiveColorListPage5],
          colors6 = [firstColorListPage6, secondColorListPage6, thirdColorListPage6, fourthColorListPage6, fiveColorListPage6, sixColorListPage6];
          
    let result = true;

    switch (numberOfRings) {

        case 4:
            for (let i = 0; i < colors4.length; i++) {
    
                if (getColor(colors4[i]) != 'transparent') {
                    continue;
                } else {
                    result = false;
                    break;
                }
                
            }
            break;

        case 5:
            for (let i = 0; i < colors5.length; i++) {
    
                if (getColor(colors5[i]) != 'transparent') {
                    continue;
                } else {
                    result = false;
                    break;
                }
                
            }
            break;  
        default:
            for (let i = 0; i < colors6.length; i++) {
    
                if (getColor(colors6[i]) != 'transparent') {
                    continue;
                } else {
                    result = false;
                    break;
                }
                
            }
            break;
    }

    return result

}

// Fonction renvoyant le multiplicateur associé à une couleur
function getMultiplier(color, numberOfRings) {
    
    let multiplier;

    switch (numberOfRings) {
        case 4:
            multiplier = thirdColorListPage4.options[thirdColorListPage4.selectedIndex].value;
            break;
        case 5:
            multiplier = fourthColorListPage5.options[fourthColorListPage5.selectedIndex].value;
            break;
    
        default:
            multiplier = fourthColorListPage6.options[fourthColorListPage6.selectedIndex].value;
            break;
    }

    return multiplier;
}

// Fonction renvoyant la tolérence associé à une couleur
function getTolerence(color, numberOfRings) {
    
    let tolerence;

    switch (numberOfRings) {
        case 4:
            tolerence = fourthColorListPage4.options[fourthColorListPage4.selectedIndex].value;
            break;
        case 5:
            tolerence = fiveColorListPage5.options[fiveColorListPage5.selectedIndex].value;
            break;
    
        default:
            tolerence = fiveColorListPage6.options[fiveColorListPage6.selectedIndex].value;
            break;
    }

    return tolerence;
}

// Fonction renvoyant le coef de temperature
function getTemperatureCoef() {
    
    let tempCoef = sixColorListPage6.options[sixColorListPage6.selectedIndex].value;

    return tempCoef;

}

// Fonction retournant les nombres génériques de la valeur de la résistance
function getGenericsNumbers(numberOfRings) {

    let genericsNumbers;
    
    switch (numberOfRings) {
        
        case 4:
            genericsNumbers = firstColorListPage4.options[firstColorListPage4.selectedIndex].value 
                            + "" + secondColorListPage4.options[secondColorListPage4.selectedIndex].value;
            break;
        case 5:
            genericsNumbers = firstColorListPage5.options[firstColorListPage5.selectedIndex].value 
                            + "" + secondColorListPage5.options[secondColorListPage5.selectedIndex].value
                            + "" + thirdColorListPage5.options[thirdColorListPage5.selectedIndex].value;
            break;
    
        default:
            genericsNumbers = firstColorListPage6.options[firstColorListPage6.selectedIndex].value 
                            + "" + secondColorListPage6.options[secondColorListPage6.selectedIndex].value
                            + "" + thirdColorListPage6.options[thirdColorListPage6.selectedIndex].value;
            break;
    }

    return parseInt(genericsNumbers);

}

// Fonction retournant la résistance minimale
function getResistorMinValue(resistanceValue, toleranceValue) {
    
    let minValue = resistanceValue - (resistanceValue * toleranceValue) / 100;

    return minValue;

}

// Fonction retournant la résistance maximale
function getResistorMaxValue(resistanceValue, toleranceValue) {
    
    let maxValue = resistanceValue + (resistanceValue * toleranceValue) / 100;

    return maxValue;

}

// Fonction permettant de formater la valeur d'une résistance
function formatResistorsValue(resistorValue) {
    
    let formatedResistorValue;

    if (resistorValue < 1000) {

        formatedResistorValue = resistorValue + " Ω";

    }
    else if (resistorValue < 1000000) {
        
        formatedResistorValue = (resistorValue) / 1000 + " KΩ";

    }
    else if (resistorValue < 100000000) {
        
        formatedResistorValue = (resistorValue) / 100000 + " MΩ";

    }
    else {
        
        formatedResistorValue = (resistorValue) / 1000000000 + " GΩ";

    }

    return formatedResistorValue;
}

// Fonction revoyant les caractéristiques de la résistance en fonction du nombre d'anneaux
function getResistorFeatures(numberOfRings) {

    let resistanceValue,
        toleranceValue,
        tempCoefValue,
        minValue,
        maxValue;
        features = {};

    
    switch (numberOfRings) {
        case 4:
            resistanceValue             = getGenericsNumbers(4) * getMultiplier(getColor(thirdColorListPage4), 4);
            toleranceValue              = getTolerence(getColor(fourthColorListPage4), 4);
            minValue                    = getResistorMinValue(resistanceValue, toleranceValue);
            maxValue                    = getResistorMaxValue(resistanceValue, toleranceValue);

            features['resistanceValue'] = formatResistorsValue(resistanceValue);
            features['toleranceValue']  = toleranceValue;
            features['minValue']        = formatResistorsValue(minValue);
            features['maxValue']        = formatResistorsValue(maxValue);

            break;
        case 5:
            resistanceValue             = getGenericsNumbers(5) * getMultiplier(getColor(fourthColorListPage5), 5);
            toleranceValue              = getTolerence(getColor(fiveColorListPage5), 5);
            minValue                    = getResistorMinValue(resistanceValue, toleranceValue);
            maxValue                    = getResistorMaxValue(resistanceValue, toleranceValue);

            features['resistanceValue'] = formatResistorsValue(resistanceValue);
            features['toleranceValue']  = toleranceValue;
            features['minValue']        = formatResistorsValue(minValue);
            features['maxValue']        = formatResistorsValue(maxValue);
            break;
        
        default:
            resistanceValue             = getGenericsNumbers(6) * getMultiplier(getColor(fourthColorListPage6), 6);
            toleranceValue              = getTolerence(getColor(fiveColorListPage5), 6);
            tempCoefValue               = getTemperatureCoef();
            minValue                    = getResistorMinValue(resistanceValue, toleranceValue);
            maxValue                    = getResistorMaxValue(resistanceValue, toleranceValue);

            features['resistanceValue'] = formatResistorsValue(resistanceValue);
            features['toleranceValue']  = toleranceValue;
            features['temperatureCoef'] = tempCoefValue;
            features['minValue']        = formatResistorsValue(minValue);
            features['maxValue']        = formatResistorsValue(maxValue);
            break;
    }
    

    return features;

}

//Fonction d'affichage des résultats
function displayResistorFatures(resistor, numberOfRings) {
    
    switch (numberOfRings) {

        case 4:
            let labelNominale4space  = document.createTextNode(resistor.resistanceValue),
                labelTolerance4space = document.createTextNode("± " + resistor.toleranceValue + "%"),
                labelMin4space       = document.createTextNode(resistor.minValue),
                labelMax4space       = document.createTextNode(resistor.maxValue);
            nominale4space.replaceChild(labelNominale4space, nominale4space.firstChild);
            tolerance4space.replaceChild(labelTolerance4space, tolerance4space.firstChild);
            min4space.replaceChild(labelMin4space, min4space.firstChild);
            max4space.replaceChild(labelMax4space, max4space.firstChild);
            break;
        case 5:
            let labelNominale5space  = document.createTextNode(resistor.resistanceValue),
                labelTolerance5space = document.createTextNode("± " + resistor.toleranceValue),
                labelMin5space       = document.createTextNode(resistor.minValue),
                labelMax5space       = document.createTextNode(resistor.maxValue);
            nominale5space.replaceChild(labelNominale5space, nominale5space.firstChild);
            tolerance5space.replaceChild(labelTolerance5space, tolerance5space.firstChild);
            min5space.replaceChild(labelMin5space, min5space.firstChild);
            max5space.replaceChild(labelMax5space, max5space.firstChild);
            break;
        default:
            let labelNominale6space  = document.createTextNode(resistor.resistanceValue),
                labelTolerance6space = document.createTextNode("± " + resistor.toleranceValue + "%"),
                labelTemperatureCoef = document.createTextNode(resistor.temperatureCoef + " ppm/K"),
                labelMin6space       = document.createTextNode(resistor.minValue),
                labelMax6space       = document.createTextNode(resistor.maxValue);
            nominale6space.replaceChild(labelNominale6space, nominale6space.firstChild);
            tolerance6space.replaceChild(labelTolerance6space, tolerance6space.firstChild);
            temperatureSpace.replaceChild(labelTemperatureCoef, temperatureSpace.firstChild);
            min6space.replaceChild(labelMin6space, min6space.firstChild);
            max6space.replaceChild(labelMax6space, max6space.firstChild);
            break;
    }

}