const paddingModule = {

    init: () => {

        const box = document.querySelectorAll('.box');

        const padding = document.getElementById('padding');

        // Texte du bout de code
        const paddingText = document.getElementById('padding-text');
        const paddingTopText = document.getElementById('padding-top-text');
        const paddingRightText = document.getElementById('padding-right-text');
        const paddingBottomText = document.getElementById('padding-bottom-text');
        const paddingLeftText = document.getElementById('padding-left-text');

        // Dimensionnement du padding
        const pLeft = document.getElementById('p-left');
        const pRight = document.getElementById('p-right');
        const pTop = document.getElementById('p-top');
        const pBottom = document.getElementById('p-bottom');

        // Valeurs dans le bout de code
        const paddingVal = document.getElementById('paddingval');
        const paddingTopVal = document.getElementById('paddingTopVal');
        const paddingRightVal = document.getElementById('paddingRightVal');
        const paddingBottomVal = document.getElementById('paddingBottomVal');
        const paddingLeftVal = document.getElementById('paddingLeftVal');

        const subparamPadding = document.querySelector('.subparam-padding');

        // Visibilité des sous bordels
        const subparamPaddingVisible = document.getElementById('subparam-padding_visible');


        // Activation du padding
        padding.addEventListener('input', function () {
            box[0].style.padding = padding.value + 'px';
            box[1].style.padding = padding.value + 'px';

            paddingVal.textContent = padding.value;
        });

        pLeft.addEventListener('input', function () {
            box[0].style.paddingLeft = pLeft.value + 'px';
            box[1].style.paddingLeft = pLeft.value + 'px';

            functionsModule.changeVisibilityAndVal(paddingLeftText, paddingLeftVal, {"top": pTop.value, "right": pRight.value, "bottom": pBottom.value, "left": pLeft.value}, 'left', 'padding');
        });

        pRight.addEventListener('input', function () {
            box[0].style.paddingRight = pRight.value + 'px';
            box[1].style.paddingRight = pRight.value + 'px';
            
            functionsModule.changeVisibilityAndVal(paddingRightText, paddingRightVal, {"top": pTop.value, "right": pRight.value, "bottom": pBottom.value, "left": pLeft.value}, 'right', 'padding');
        });

        pTop.addEventListener('input', function () {
            box[0].style.paddingTop = pTop.value + 'px';
            box[1].style.paddingTop = pTop.value + 'px';

            functionsModule.changeVisibilityAndVal(paddingTopText, paddingTopVal, {"top": pTop.value, "right": pRight.value, "bottom": pBottom.value, "left": pLeft.value}, 'top', 'padding');
        });

        pBottom.addEventListener('input', function () {
            box[0].style.paddingBottom = pBottom.value + 'px';
            box[1].style.paddingBottom = pBottom.value + 'px';

            functionsModule.changeVisibilityAndVal(paddingBottomText, paddingBottomVal, {"top": pTop.value, "right": pRight.value, "bottom": pBottom.value, "left": pLeft.value}, 'bottom', 'padding');
        });

        subparamPaddingVisible.addEventListener('click', function () {
            subparamPadding.classList.toggle('visible');

            // Si la boîte des sous-paddings est ouverte
            if (subparamPadding.classList.contains('visible')) {
                subparamPaddingVisible.classList.remove('fa-arrow-down');
                subparamPaddingVisible.classList.add('fa-arrow-up');
                padding.value = 0;
                box[0].style.padding = 0;
                box[1].style.padding = 0;
                padding.disabled = true;

                paddingText.classList.add('hidden');
                paddingText.classList.remove('visible');

            } else {
                subparamPaddingVisible.classList.remove('fa-arrow-up');
                subparamPaddingVisible.classList.add('fa-arrow-down');
                paddingVal.textContent = '0';
                padding.disabled = false;
                box[0].style.padding = 0;
                box[1].style.padding = 0;

                pLeft.value = 0;
                pRight.value = 0;
                pTop.value = 0;
                pBottom.value = 0;

                paddingTopVal.textContent = '0';
                paddingRightVal.textContent = '0';
                paddingBottomVal.textContent = '0';
                paddingLeftVal.textContent = '0';
                
                paddingText.classList.remove('hidden');
                paddingText.classList.add('visible');

                paddingTopText.classList.remove('visible');
                paddingTopText.classList.add('hidden');

                paddingLeftText.classList.remove('visible');
                paddingLeftText.classList.add('hidden');

                paddingRightText.classList.remove('visible');
                paddingRightText.classList.add('hidden');

                paddingBottomText.classList.remove('visible');
                paddingBottomText.classList.add('hidden');
            }
        })
    }
};