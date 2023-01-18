//using selectors inside the element
// traversing the dom
// const allBtn = document.querySelectorAll('.question-btn');
const questions = document.querySelectorAll('.question');



questions.forEach(function (question) {
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function () {
        // هنا تم اختيار جميع الاسئلة وعمل لوب عليها لمعرفة السؤال
        questions.forEach(function (item) {
            // فحص هل السؤال الذي تم فتحه يوجد غيره مفتوح لابد من اغلاقه
            if (item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle("show-text");
    })
});


















/*
allBtn.forEach( function (btn) {
    btn.addEventListener('click', function (e) {
        // هنا تم اختيار جميع الاسئلة وعمل لوب عليها لمعرفة السؤال
        questions.forEach(function (item) {
            // فحص هل السؤال الذي تم فتحه يوجد غيره مفتوح لابد من اغلاقه
            if (item !== e) {
                item.classList.remove('show-text');
            }
        });
        e.currentTarget.parentElement.parentElement.classList.toggle("show-text");
    })
});*/