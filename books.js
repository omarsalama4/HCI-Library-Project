// Sample book data
const books = [
    { title: 'Book 1', category: 'Fiction', image: 'library.jpg',downloadLink: 'https://www.mediafire.com/file/52ycz4lphe50u7g/invoice.pdf/file'},
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
                <div class="book-buttons">
                    <button class="download-button" onclick="downloadBook('${book.title}', '${book.downloadLink}')">Download</button>
                    <button class="preview-button" onclick="previewBook('${book.title}')">Preview</button>
                </div>
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
function searchBooks() {
    const searchInput = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchInput));
    
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    filteredBooks.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <div class="book-title">${book.title}</div>
            <div class="book-category">${book.category}</div>
        `;
        bookList.appendChild(bookElement);
    });
}

function downloadBook(title, downloadLink) {
    // Redirect to the download link
    window.location.href = downloadLink;
}


// Function to handle preview button click
function previewBook(title) {
    // This is a placeholder for the preview functionality
    console.log(`Previewing ${title}`);
    // You can add your preview logic here, such as opening a new tab with a preview of the book
}
