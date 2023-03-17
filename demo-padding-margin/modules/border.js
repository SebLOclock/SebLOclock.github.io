const borderModule = {



    init: () => {

        const border = document.getElementById('border');
        const radius = document.getElementById('radius');
        const borderVal = document.getElementById('borderval');
        const radiusVal = document.getElementById('radiusval');
        const box = document.querySelectorAll('.box');

        border.addEventListener('input', function(){
            box[0].style.border = (parseInt(border.value) + 1) + "px solid";
            box[1].style.border = (parseInt(border.value) + 1) + "px solid";

            borderVal.textContent = (parseInt(border.value) + 1);
        })

        // Activation du radius
        radius.addEventListener('input', function(){
            box[0].style.borderRadius  = (10 + parseInt(radius.value)) + 'px';
            box[1].style.borderRadius  = (10 + parseInt(radius.value)) + 'px';

            radiusVal.textContent = (parseInt(radius.value) + 10);
        })
    },
};
