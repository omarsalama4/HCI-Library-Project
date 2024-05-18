document.addEventListener('DOMContentLoaded', function () {
    loadReviews();
    
    document.getElementById('review-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const bookTitle = document.getElementById('book-title').value;
        const reviewerName = document.getElementById('reviewer-name').value;
        const reviewText = document.getElementById('review').value;

        const review = {
            bookTitle,
            reviewerName,
            reviewText
        };

        saveReview(review);
        displayReview(review);
        document.getElementById('review-form').reset();
    });

    document.getElementById('filter-reviews').addEventListener('change', function () {
        const filterValue = this.value;
        const reviews = document.querySelectorAll('.review');

        reviews.forEach(review => {
            if (filterValue === 'all' || review.getAttribute('data-book-title') === filterValue) {
                review.style.display = 'block';
            } else {
                review.style.display = 'none';
            }
        });
    });
});

function saveReview(review) {
    let reviews = JSON.parse(localStorage.getItem('Reviews')) || [];
    reviews.push(review);
    localStorage.setItem('Reviews', JSON.stringify(reviews));
}

function loadReviews() {
    let reviews = JSON.parse(localStorage.getItem('Reviews')) || [];
    reviews.forEach(displayReview);
}

function displayReview(review) {
    const reviewContainer = document.createElement('div');
    reviewContainer.classList.add('review');
    reviewContainer.setAttribute('data-book-title', review.bookTitle);

    const reviewContent = `
        <h3 class="book-title">${review.bookTitle}</h3>
        <h4>Reviewed by: ${review.reviewerName}</h4>
        <p>${review.reviewText}</p>
        <hr>
    `;

    reviewContainer.innerHTML = reviewContent;
    document.getElementById('reviews-container').appendChild(reviewContainer);
}
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
}
