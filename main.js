// homepage-section8
const questionOfHomeSec8 = document.querySelectorAll('.homepage-section8__question');
const questionIconOfHomeSec8 = document.querySelectorAll('.homepage-section8__question-icon');
const questionLineOfHomeSec8 = document.querySelectorAll('.homepage-section8__question-line');

questionOfHomeSec8.forEach((area, index) => {

    area.addEventListener('click', () => {
        area.classList.toggle('homepage-section8__question--active');

        if (area.classList.contains('homepage-section8__question--active')) {
            questionIconOfHomeSec8[index].src = './src/images/homepage-section8-question-icon-left.png';
            questionIconOfHomeSec8[index].classList.add('homepage-section8__question-icon--active');

            if (index < questionLineOfHomeSec8.length) {
                questionLineOfHomeSec8[index].classList.add('homepage-section8__question-line--active');
            }
        } else {
            questionIconOfHomeSec8[index].src = './src/images/homepage-section8-question-icon-right.png';
            questionIconOfHomeSec8[index].classList.remove('homepage-section8__question-icon--active');

            if (index < questionLineOfHomeSec8.length) {
                questionLineOfHomeSec8[index].classList.remove('homepage-section8__question-line--active');
            }
        }        
    });
})
// homepage-section8

// homepage-section9
let selectedReviewOfHomeSec9 = 0;

const leftArrowOfHomeSec9 = document.getElementById('homepage-section9__left-arrow-button');
const rightArrowOfHomeSec9 = document.getElementById('homepage-section9__right-arrow-button');
const reviewOfHomeSec9 = document.querySelectorAll('.homepage-section9__review-info');

function disableButtonsOfHomeSec9() {
    leftArrowOfHomeSec9.disabled = true;
    rightArrowOfHomeSec9.disabled = true;

    leftArrowOfHomeSec9.classList.add('homepage-section9__arrow-button-disabled');
    rightArrowOfHomeSec9.classList.add('homepage-section9__arrow-button-disabled');
}

function enableButtonsOfHomeSec9() {
    leftArrowOfHomeSec9.disabled = false;
    rightArrowOfHomeSec9.disabled = false;

    leftArrowOfHomeSec9.classList.remove('homepage-section9__arrow-button-disabled');
    rightArrowOfHomeSec9.classList.remove('homepage-section9__arrow-button-disabled');
}

reviewOfHomeSec9.forEach(review => {
    review.addEventListener('animationstart', () => {
        disableButtonsOfHomeSec9();
    });
    review.addEventListener('animationend', () => {
        enableButtonsOfHomeSec9();
    });
});

leftArrowOfHomeSec9.addEventListener('click', () => {
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.add('homepage-section9__review-delete');
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-fadeOut');

    if (reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.contains('homepage-section9__review-fadeIn')) {
        reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-fadeIn');
    }

    selectedReviewOfHomeSec9--;

    if (selectedReviewOfHomeSec9 < 0) {
        selectedReviewOfHomeSec9 = reviewOfHomeSec9.length - 1;
    }

    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-delete');
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.add('homepage-section9__review-fadeOut');
});

rightArrowOfHomeSec9.addEventListener('click', () => {
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.add('homepage-section9__review-delete');
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-fadeIn');

    if (reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.contains('homepage-section9__review-fadeOut')) {
        reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-fadeOut');
    }

    selectedReviewOfHomeSec9++;

    if (selectedReviewOfHomeSec9 >= reviewOfHomeSec9.length) {
        selectedReviewOfHomeSec9 = 0;
    }

    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-delete');
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.add('homepage-section9__review-fadeIn');
});
// homepage-section9

// homepage-section10
let timerIntervalOfHomeSec10;
let selectedRadioOfHomeSec10 = 0;

const radioOfHomeSec10 = document.querySelectorAll('.homepage-section10__radio');
const insightsOfHomeSec10 = document.querySelectorAll('.homepage-section10__insights');

function startTimerIntervalOfHomeSec10() {
    timerIntervalOfHomeSec10 = setInterval(() => {
        insightsOfHomeSec10[selectedRadioOfHomeSec10].classList.add('homepage-section10__insights-delete');
        radioOfHomeSec10[selectedRadioOfHomeSec10].checked = false;
    
        selectedRadioOfHomeSec10++;
    
        if (selectedRadioOfHomeSec10 >= radioOfHomeSec10.length) {
            selectedRadioOfHomeSec10 = 0;
        }
    
        insightsOfHomeSec10[selectedRadioOfHomeSec10].classList.remove('homepage-section10__insights-delete');
        radioOfHomeSec10[selectedRadioOfHomeSec10].checked = true;
    }, 5000);
}

startTimerIntervalOfHomeSec10();

radioOfHomeSec10.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        clearInterval(timerIntervalOfHomeSec10);

        insightsOfHomeSec10[selectedRadioOfHomeSec10].classList.add('homepage-section10__insights-delete');
        insightsOfHomeSec10[index].classList.remove('homepage-section10__insights-delete');

        selectedRadioOfHomeSec10 = index;

        startTimerIntervalOfHomeSec10();
    });
})
// homepage-section10

// homepage-section11
let selectedImageOfHomeSec11 = 0;

const mainImageOfHomeSec11 = document.getElementById('homepage-section11__image-main');
const allImagesOfHomeSec11 = document.querySelectorAll('.homepage-section11__image');

allImagesOfHomeSec11.forEach((image, index) => {
    image.addEventListener('click', () => {
        allImagesOfHomeSec11[selectedImageOfHomeSec11].classList.remove('homepage-section11__image-checked');
        image.classList.add('homepage-section11__image-checked');

        selectedImageOfHomeSec11 = index;
        mainImageOfHomeSec11.style.backgroundImage = `url('./src/images/homepage-section11-image${selectedImageOfHomeSec11 + 1}.png')`;
    });
})
// homepage-section11