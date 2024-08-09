// homepage-section8
const previousHeightOfHomeSec8 = 42;
const heightOfQuestionOfHomeSec8 = [174, 174, 144, 144, 144];

const questionOfHomeSec8 = document.querySelectorAll('.homepage-section8__question');
const questionIconOfHomeSec8 = document.querySelectorAll('.homepage-section8__question-icon');
const questionLineOfHomeSec8 = document.querySelectorAll('.homepage-section8__question-line');

questionOfHomeSec8.forEach((area, index) => {
    let isAciveOfHomeSec8 = false;

    area.addEventListener('click', () => {

        if (isAciveOfHomeSec8) {
            isAciveOfHomeSec8 = false;
            area.style.height = `${previousHeightOfHomeSec8}px`;

            questionIconOfHomeSec8[index].src = './src/images/homepage-section8-question-icon-right.png';
            questionIconOfHomeSec8[index].style.filter = 'opacity(1)';

            if (index < questionLineOfHomeSec8.length) {
                questionLineOfHomeSec8[index].style.height = '1px';
                questionLineOfHomeSec8[index].style.filter = 'opacity(0.7)';
            }
        } else {
            isAciveOfHomeSec8 = true;
            area.style.height = `${heightOfQuestionOfHomeSec8[index]}px`;

            questionIconOfHomeSec8[index].src = './src/images/homepage-section8-question-icon-left.png';
            questionIconOfHomeSec8[index].style.filter = 'opacity(0.5)';

            if (index < questionLineOfHomeSec8.length) {
                questionLineOfHomeSec8[index].style.height = '2px';
                questionLineOfHomeSec8[index].style.filter = 'opacity(1)';
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

leftArrowOfHomeSec9.addEventListener('click', () => {
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.add('homepage-section9__review-delete');

    selectedReviewOfHomeSec9--;

    if (selectedReviewOfHomeSec9 < 0) {
        selectedReviewOfHomeSec9 = reviewOfHomeSec9.length - 1;
    }

    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-delete');
});

rightArrowOfHomeSec9.addEventListener('click', () => {
    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.add('homepage-section9__review-delete');

    selectedReviewOfHomeSec9++;

    if (selectedReviewOfHomeSec9 >= reviewOfHomeSec9.length) {
        selectedReviewOfHomeSec9 = 0;
    }

    reviewOfHomeSec9[selectedReviewOfHomeSec9].classList.remove('homepage-section9__review-delete');
});
// homepage-section9

// homepage-section10
let selectedRadioOfHomeSec10 = 0;

const radioOfHomeSec10 = document.querySelectorAll('.homepage-section10__radio');
const insightsOfHomeSec10 = document.querySelectorAll('.homepage-section10__insights');

radioOfHomeSec10.forEach((radio, index) => {
    radio.addEventListener('click', () => {
        insightsOfHomeSec10[selectedRadioOfHomeSec10].classList.add('homepage-section10__insights-delete');
        insightsOfHomeSec10[index].classList.remove('homepage-section10__insights-delete');

        selectedRadioOfHomeSec10 = index;
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
        mainImageOfHomeSec11.style.backgroundImage = `url('./src/images/homepage-section11-image${selectedImageOfHomeSec11 + 1}-light.png')`;
    });
})
// homepage-section11