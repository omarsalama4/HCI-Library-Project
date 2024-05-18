document.addEventListener('DOMContentLoaded', function () {
    const featuredBooks = [
        {
            title: 'Atomic Habits',
            genre: 'Thriller',
            imgSrc: 'atomic habits.jpeg',
            author: "James Clear",
            description: "The book explains the science of habits, the four laws of behavior change, and how to design your environment and identity to support your goals.",
            downloadLink: 'https://www.taleem360.com/download/atomic-habits-by-james-clear-pdf-6uu',
            previewlink: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20(%20PDFDrive%20).pdf"
        },
        {
            title: 'Jane Eyre',
            genre: 'Romance',
            imgSrc: 'Jane Eyre.jpeg',
            author: "Charlotte Bronte",
            description: "Romantic melodrama or feminist classic, Jane Eyre is one of the most enduringly popular and compelling novels in the literary canon. Overlooked or dismissed by critics in the nineteenth and early twentieth centuries, it first began to attract serious critical attention in the 1970s as New Critical, formalist and feminist critics began to re-evaluate Charlotte Bronte's achievement.",
            downloadLink: 'https://www.aliceandbooks.com/book/download-link/10/26',
            previewlink: "https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf"
        },
        {
            title: 'The Kite Runner',
            genre: 'Drama',
            imgSrc: 'The Kite Runner.jpeg',
            author: "Khaled Hosseini",
            description: "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
            downloadLink: 'https://www.pdfdrive.com/download.pdf?id=48246107&h=0da072a47247c2893f75477c129f6b55&u=cache&ext=pdf',
            previewlink: "https://mrsmeganparrish.weebly.com/uploads/3/8/0/5/38056115/the_kite_runner.pdf"
        },
    ];

    const upcomingBooks = [
        {
            title: 'You Like It Darker',
            author: 'Stephen King',
            description: 'You Like It Darker is a collection of twelve stories by American author Stephen King, set to be published by Scribner in May 2024. It delves into the darker aspects of life, both metaphorically and literally.',
            imgSrc: 'you like it darker.jpeg',
            genre: 'Horror'
        },
        {
            title: 'The Guncle Abroad',
            author: 'Steven Rowley',
            description: 'Patrick OHara is called back to his guncle duties ,This time for a big family wedding in Italy.Patrick O’Hara is back.It’s been five years since his summer as his niece Maisie and nephew Grant’s caretaker after their mother’s passing.',
            imgSrc: 'Gungle abroad.jpeg',
            genre: 'Science Fiction'
        },
        {
            title: 'Daydream: A Novel',
            author: 'Hannah Grace',
            description: 'The third in the New York Times bestselling Maple Hills series follows fan-favorite Henry and a bookish fellow student who come up with a plan to help them both overcome their respective challenges.',
            imgSrc: 'Daydream.jpeg',
            genre: 'Romance'
        }
    ];

    function generateBookHTML(book, isFeatured) {
        return `
        <div class="book">
            <a href="${isFeatured ? book.previewlink : '#'}" class="${isFeatured ? '' : 'no-action'}">
                <img src="${book.imgSrc}" alt="Book Cover">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Genre: ${book.genre}</p>
                <p class="book-description">Description: ${book.description}</p>
                ${isFeatured ? `
                <div class="book-buttons">
                    <a href="${book.downloadLink}">
                        <button class="download-button">
                            <img src="downloads.png" alt="Download">
                        </button>
                    </a>
                </div>` : ''}
            </a>
        </div>
        `;
    }

    function populateBooks(containerId, books, isFeatured) {
        const container = document.getElementById(containerId);
        container.innerHTML = books.map(book => generateBookHTML(book, isFeatured)).join('');
    }

    function preventDefaultAction(event) {
        if (event.target.closest('a.no-action')) {
            event.preventDefault();
        }
    }

    document.addEventListener('click', preventDefaultAction);

    populateBooks('featured-books-container', featuredBooks, true);
    populateBooks('upcoming-books-container', upcomingBooks, false);
});

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
}
function navigateToMenuPage() {
    window.location.href = 'books.html';
}