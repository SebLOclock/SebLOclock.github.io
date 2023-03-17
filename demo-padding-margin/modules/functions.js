/*const functionsModule = {
    changeVisibilityAndVal: function(currentElement, valElement, objectValues, position) {

        if (currentElement.classList.contains('hidden') && objectValues[position] > 0) {
            currentElement.classList.remove('hidden');
            currentElement.classList.add('visible');
        } else if(currentElement.classList.contains('visible') && objectValues[position] == 0) {
            currentElement.classList.remove('visible');
            currentElement.classList.add('hidden');
        }

        valElement.textContent = objectValues[position];

        const numberOfValues = (objectValues.top > 0 && 1) + (objectValues.right > 0 && 1) + (objectValues.bottom > 0 && 1) + (objectValues.left > 0 && 1);
    }
}*/

const functionsModule = {
    /**
     * currentElement {htmlElement} L'élément html qui contient le texte de code concerné
     * globalValElement {htmlElement} L'élément html qui contient la valeur globale de la propriété
     * valElement {htmlElement} L'élément html qui encadre la valeur dans le code
     * objectValues {Object} Un objet qui contient les propriétés actuelles des valeurs top, right, bottom, left dans cet ordre
     * position {String} La position qui nous intéresse ici (top, right, bottom ou left)
     */
    changeVisibilityAndVal: function(currentElement, valElement, objectValues, position, action) {
        
        const paddingText = document.getElementById('padding-text');
        const paddingTopText = document.getElementById('padding-top-text');
        const paddingRightText = document.getElementById('padding-right-text');
        const paddingBottomText = document.getElementById('padding-bottom-text');
        const paddingLeftText = document.getElementById('padding-left-text');

        const marginText = document.getElementById('margin-text');
        const marginTopText = document.getElementById('margin-top-text');
        const marginRightText = document.getElementById('margin-right-text');
        const marginBottomText = document.getElementById('margin-bottom-text');
        const marginLeftText = document.getElementById('margin-left-text');

        const marginVal = document.getElementById('marginval');
        const paddingVal = document.getElementById('paddingval');

        const globalElementText = (action == 'padding')? paddingText: marginText;
        const globalValElement = (action == 'padding')? paddingVal: marginVal;

        const currentRightText = (action == 'padding')? paddingRightText: marginRightText;
        const currentBottomText = (action == 'padding')? paddingBottomText: marginBottomText;
        const currentTopText = (action == 'padding')? paddingTopText: marginTopText;
        const currentLeftText = (action == 'padding')? paddingLeftText: marginLeftText;

        console.log(objectValues);
        console.log(objectValues[position]);
        valElement.textContent = objectValues[position];
        
        // Si on a au moins deux valeurs à plus de 0 dans objectValues, on va créer une chaîne de caractères avec les valeurs dans l'ordre top, right, bottom, left
        const numberOfValues = (parseInt(objectValues.top) > 0 && 1) + (parseInt(objectValues.right) > 0 && 1) + (parseInt(objectValues.bottom) > 0 && 1) + (parseInt(objectValues.left) > 0 && 1);

        if (currentElement.classList.contains('hidden') && objectValues[position] > 0) {
            currentElement.classList.remove('hidden');
            currentElement.classList.add('visible');
        } else if(currentElement.classList.contains('visible') && objectValues[position] == 0) {
            currentElement.classList.remove('visible');
            currentElement.classList.add('hidden');
        }

        if(numberOfValues > 1) {
            globalElementText.classList.remove('hidden');
            globalElementText.classList.add('visible');

            const parent = currentElement.parentElement;
            const children = parent.querySelectorAll('.visible');

            
            for(let showedElement of children) {
                showedElement.classList.remove('visible');
                showedElement.classList.add('hidden');
            }
            console.log('entree');

            if(numberOfValues > 1 && objectValues.top == objectValues.bottom && objectValues.left == objectValues.right) {
                console.log('top + left');
                globalValElement.textContent = objectValues.top + 'px ' + objectValues.left;
            } else if (numberOfValues >= 3 && objectValues.left == objectValues.right) {
                console.log('top + right + bottom');
                globalValElement.textContent = objectValues.top + 'px ' + objectValues.right + 'px ' + objectValues.bottom;
            } else if(numberOfValues > 2) {
                console.log('top + right + bottom + left');
                globalValElement.textContent = objectValues.top + 'px ' + objectValues.right + 'px ' + objectValues.bottom + 'px ' + objectValues.left;
            } else {
                console.log('masquer le gros con et afficher le petit zroutzrout');

                if(objectValues.top > 0 ) {
                    currentTopText.classList.remove('hidden');
                    currentTopText.classList.add('visible');
                }

                if(objectValues.right > 0) {
                    currentRightText.classList.remove('hidden');
                    currentRightText.classList.add('visible');
                }
                
                if(objectValues.left > 0) {
                    currentLeftText.classList.remove('hidden');
                    currentLeftText.classList.add('visible');
                }
                
                if(objectValues.bottom > 0) {
                    currentBottomText.classList.remove('hidden');
                    currentBottomText.classList.add('visible');
                }

                globalElementText.classList.add('hidden');
                globalElementText.classList.remove('visible');
            }
        }
    }
}