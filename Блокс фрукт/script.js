var questionArea = document.querySelectorAll('.question');

questionArea.forEach((el) => {
    var question = el.firstElementChild;
    var questionHidden = el.nextElementSibling;
    el.addEventListener('click', function () {
        questionHidden.classList.toggle('hidden');
        questionArea.forEach((otherEl) => {
            if (otherEl !== el)
                otherEl.nextElementSibling.classList.add('hidden')
        })
    })
});

const checkboxes = document.querySelectorAll('.color-toggle');

checkboxes.forEach(checkbox => {

    checkbox.addEventListener('change', function () {

        const label = this.nextElementSibling;


        const isCorrect = this.getAttribute('data-correct') === 'true';


        if (this.checked) {
            label.style.color = isCorrect ? 'green' : 'red';
        } else {

            label.style.color = '';
        }
    });
});