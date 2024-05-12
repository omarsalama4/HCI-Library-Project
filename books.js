// Sample book data
const books = [
    { title: 'Book 1', category: 'Fiction', image: 'library.jpg' },
    { title: 'Book 2', category: 'Non-Fiction', image: 'library.jpg' },
    { title: 'Book 3', category: 'Science', image: 'library.jpg' },
    { title: 'Book 4',category: 'Drama', image: 'library.jpg' },
    // Add more books as needed
];

// Function to display books based on selected categories
function filterBooks() {
    const checkboxes = document.querySelectorAll('.filter-bar input[type="checkbox"]');
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.parentNode.textContent.trim());

    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    books.forEach(book => {
        if (selectedCategories.includes(book.category) || selectedCategories.length === 0) {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
                <img src="${book.image}" alt="${book.title}">
                <div class="book-title">${book.title}</div>
                <div class="book-category">${book.category}</div>
            `;
            bookList.appendChild(bookElement);
        }
    });
}

// Initial call to display all books
filterBooks();

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
}

// Function to toggle filter bar visibility
function toggleFilter() {
    var filterBar = document.getElementById("filter-bar");
    filterBar.classList.toggle("open");
}
