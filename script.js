main = () => {
    const ratingForm = document.querySelector('#rating-form');
    const ratingText = document.querySelector('#rating-text');
    const ratingState = document.querySelector('#rating-state');
    const thankyouState = document.querySelector('#thankyou-state');
    const flipCard = document.querySelector('.card-container');
    let ratingFormSelection;

    ratingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(ratingForm);
        ratingFormSelection = formData.get('rating');

        if (ratingFormSelection) {
            ratingText.innerHTML = `You selected ${ratingFormSelection} out of 5`;

            flipCard.classList.add('flip-card');
        }
    });
}

document.addEventListener('DOMContentLoaded', main);