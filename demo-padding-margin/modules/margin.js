const marginModule = {

    init: () => {

    const margin = document.getElementById('margin');

    const mLeft = document.getElementById('m-left');
    const mRight = document.getElementById('m-right');
    const mTop = document.getElementById('m-top');
    const mBottom = document.getElementById('m-bottom');

    const subparamMarginVisible = document.getElementById('subparam-margin_visible');
    const subparamMargin = document.querySelector('.subparam-margin');

    // Texte du bout de code
    const marginText = document.getElementById('margin-text');
    const marginTopText = document.getElementById('margin-top-text');
    const marginRightText = document.getElementById('margin-right-text');
    const marginBottomText = document.getElementById('margin-bottom-text');
    const marginLeftText = document.getElementById('margin-left-text');

    // Valeurs dans le bout de code
    const marginVal = document.getElementById('marginval');
    const marginTopVal = document.getElementById('marginTopVal');
    const marginRightVal = document.getElementById('marginRightVal');
    const marginBottomVal = document.getElementById('marginBottomVal');
    const marginLeftVal = document.getElementById('marginLeftVal');

    const box = document.querySelectorAll('.box');

        margin.addEventListener('input', function () {
            box[0].style.margin = margin.value + 'px';
            box[1].style.margin = margin.value + 'px';

            marginVal.textContent = margin.value;
        })

        console.log(mLeft);
        mLeft.addEventListener('input', function () {
            box[0].style.marginLeft = mLeft.value + 'px';
            box[1].style.marginLeft = mLeft.value + 'px';

            functionsModule.changeVisibilityAndVal(marginLeftText, marginLeftVal, {"top": mTop.value, "right": mRight.value, "bottom": mBottom.value, "left": mLeft.value}, 'left', 'margin');
        })

        mRight.addEventListener('input', function () {
            box[0].style.marginRight = mRight.value + 'px';
            box[1].style.marginRight = mRight.value + 'px';

            functionsModule.changeVisibilityAndVal(marginRightText, marginRightVal, {"top": mTop.value, "right": mRight.value, "bottom": mBottom.value, "left": mLeft.value}, 'right', 'margin');
        })

        mTop.addEventListener('input', function () {
            box[0].style.marginTop = mTop.value + 'px';
            box[1].style.marginTop = mTop.value + 'px';

            functionsModule.changeVisibilityAndVal(marginTopText, marginTopVal, {"top": mTop.value, "right": mRight.value, "bottom": mBottom.value, "left": mLeft.value}, 'top', 'margin');
        })

        mBottom.addEventListener('input', function () {
            box[0].style.marginBottom = mBottom.value + 'px';
            box[1].style.marginBottom = mBottom.value + 'px';

            functionsModule.changeVisibilityAndVal(marginBottomText, marginBottomVal, {"top": mTop.value, "right": mRight.value, "bottom": mBottom.value, "left": mLeft.value}, 'bottom', 'margin');
        });

        subparamMarginVisible.addEventListener('click', function(){
            subparamMargin.classList.toggle('visible');

            // Si la boîte des sous-margins est ouverte
            if(subparamMargin.classList.contains('visible')){
                subparamMarginVisible.classList.remove('fa-arrow-down');
                subparamMarginVisible.classList.add('fa-arrow-up');
                margin.disabled = true;
                margin.value = 0;
                box[0].style.margin = 0;
                box[1].style.margin = 0;
                marginText.classList.add('hidden');
                marginText.classList.remove('visible');
            } else {
                subparamMarginVisible.classList.remove('fa-arrow-up');
                subparamMarginVisible.classList.add('fa-arrow-down');
                marginVal.textContent = '0';
                margin.disabled = false;
                box[0].style.margin = 0;
                box[1].style.margin = 0;
                
                mLeft.value = 0;
                mRight.value = 0;
                mTop.value = 0;
                mBottom.value = 0;
                
                marginTopVal.textContent = '0';
                marginRightVal.textContent = '0';
                marginBottomVal.textContent = '0';
                marginLeftVal.textContent = '0';

                marginText.classList.remove('hidden');
                marginText.classList.add('visible');

                marginTopText.classList.remove('visible');
                marginTopText.classList.add('hidden');

                marginLeftText.classList.remove('visible');
                marginLeftText.classList.add('hidden');

                marginRightText.classList.remove('visible');
                marginRightText.classList.add('hidden');

                marginBottomText.classList.remove('visible');
                marginBottomText.classList.add('hidden');
            }
        })
    }
};