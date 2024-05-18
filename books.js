const books = [
    {
        title: 'Atomic Habits',
        category: 'Thriller',
        image: 'atomic habits.jpeg',
        authorname: "James Clear",
        description: "The book explains the science of habits, the four laws of behavior change, and how to design your environment and identity to support your goals.",
        downloadLink: 'https://www.taleem360.com/download/atomic-habits-by-james-clear-pdf-6uu',
        previewlink: "https://dn790007.ca.archive.org/0/items/atomic-habits-pdfdrive/Atomic%20habits%20(%20PDFDrive%20).pdf"
    },
    {
        title: 'Jane Eyre',
        category: 'Romance',
        image: 'Jane Eyre.jpeg',
        authorname: "Charlotte Bronte",
        description: "Romantic melodrama or feminist classic, Jane Eyre is one of the most enduringly popular and compelling novels in the literary canon. Overlooked or dismissed by critics in the nineteenth and early twentieth centuries, it first began to attract serious critical attention in the 1970s as New Critical, formalist and feminist critics began to re-evaluate Charlotte Bronte's achievement.",
        previewlink: "https://www.ucm.es/data/cont/docs/119-2014-04-09-Jane%20Eyre.pdf",
        downloadLink: 'https://www.aliceandbooks.com/book/download-link/10/26',
    },
    {
        title: 'The Kite Runner',
        category: 'Drama',
        image: 'The Kite Runner.jpeg',
        authorname: "Khaled Hosseini",
        description: "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul.",
        previewlink: "https://mrsmeganparrish.weebly.com/uploads/3/8/0/5/38056115/the_kite_runner.pdf",
        downloadLink: 'https://www.pdfdrive.com/download.pdf?id=48246107&h=0da072a47247c2893f75477c129f6b55&u=cache&ext=pdf',
    },
    {
        title: 'The Spanish Love Deception',
        category: 'Adventure',
        image: 'The Spanish Love.jpeg',
        authorname: "Elena Armas",
        description: "modern masterpiece, a powerful novel that can be read on its own. This novel is written by  Elena Armas. She is a true storyteller, and The Spanish Love Deception is her best book. It’s an epic tale of family, secrets, loss, marriage, betrayal, friendships, laughter, and regrets. ",
        previewlink: "https://ia802700.us.archive.org/5/items/the-spanish-love-deception_202307/The%20Spanish%20Love%20Deception.pdf",
        downloadLink: 'https://www.junkybooks.com/administrator/thebooks/62e235c8e53c4-the-spanish-love-deception.pdf',
    },
    {
        title: 'Displaced',
        category: 'Science Fiction',
        image: 'Displaced.jpeg',
        authorname: "Stephen Drake",
        description: "When Kevin Murdock, martial artist and outdoorsman extraordinaire, is revived from suspended animation aboard a transport pod, he and his nine fellow occupants have no idea what to expect. Murdock argues for caution after seeing something strange: animals also inhabit their new environment, all of them larger than their Earthly counterparts. Conflict soon erupts between Murdock and James Whittier - a politician with a lust for power and control.",
        previewlink: 'https://www.junkybooks.com/administrator/thebooks/62bb5f77a81ce-displaced.pdf',
        downloadLink: 'https://download2.booksdrive.org/download-book/?dlm-dp-dl=44587'
    },
    {
        title: 'The Swordswoman',
        category: 'Fantasy',
        image: 'The Swordswoman.jpeg',
        authorname: "Malcolm Archibald",
        description: "The Norse thought they could conquer Scotland. They were wrong. Melcorka is an ordinary young woman from the Isles. But when her homeland of Alba is attacked by the Viking horde, Melcorka abandons her life of luxury and chooses the path of a warrior. With a ragtag band of companions, she heads south to unite the clans and free the land from the Norsemen's scourge - and claim her destiny.",
        previewlink: 'https://www.junkybooks.com/administrator/thebooks/62bb5d4661a6d-the-swordswoman.pdf',
        downloadLink: 'https://www.junkybooks.com/administrator/thebooks/62bb5d4661a6d-the-swordswoman.pdf'
    },
    {
        title: 'Goliath',
        category: 'Thriller',
        image: 'Goliath.jpeg',
        authorname: "Richard Turner",
        description: "In 1931, during its maiden voyage, the British Airship Goliath mysteriously disappears without a trace. Hidden deep inside is a secret that could change the world.",
        previewlink: 'https://www.junkybooks.com/administrator/thebooks/62bb4a6e4adb7-goliath.pdf',
        downloadLink: 'https://www.junkybooks.com/administrator/thebooks/62bb4a6e4adb7-goliath.pdf'
    },
    {
        title: 'The Reluctant Coroner',
        category: 'Thriller',
        image: 'The Reluctant Coroner.jpg',
        authorname: "Paul Austin Ardoin",
        description: "Blood is thicker than oil--until murder is involved. Fenway Stevenson doesn't want to return to the coastal town where her estranged father is practically king. But the death of her mother draws her back home--and the murder of the county coroner draws her into a deepening conspiracy. As the body count rises and all signs seem to point toward her father's oil company, will Fenway uncover the truth before family bonds become deadly?",
        previewlink: 'https://www.junkybooks.com/administrator/thebooks/62bb5bfe51fb6-the-reluctant-coroner.pdf',
        downloadLink: "https://www.junkybooks.com/administrator/thebooks/62bb5bfe51fb6-the-reluctant-coroner.pdf"
    },
];

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("open");
}

function toggleFilter() {
    var filterBar = document.getElementById("filter-bar");
    filterBar.classList.toggle("open");
}

function filterAndSearchBooks() {
    const checkboxes = document.querySelectorAll('.filter-bar input[type="checkbox"]');
    const selectedCategories = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.parentNode.textContent.trim());

    const searchInput = document.getElementById('search').value.toLowerCase();

    const filteredBooks = books.filter(book => {
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(book.category);
        const matchesSearch = book.authorname.toLowerCase().includes(searchInput) || book.title.toLowerCase().includes(searchInput);
        return matchesCategory && matchesSearch;
    });

    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    if (filteredBooks.length === 0) {
        bookList.innerHTML = '<p class = nodata>#404:(<br>No books found</p>';
    } else {
        filteredBooks.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.classList.add('book');
            bookElement.innerHTML = `
            <a href="${book.previewlink}" class="book-link">
                <img src="${book.image}" alt="${book.title}">
                <h3>${book.title}</h3>
                <p>Author: ${book.authorname}</p>
                <p>Genre: ${book.category}</p>
                <p class="book-description">Description: ${book.description}</p>
                <div class="book-buttons">
                    <a href="${book.downloadLink}">
                        <button class="download-button">
                            <img src="downloads.png" alt="Download">
                        </button>
                    </a>
                </div>
            </a>
            `;
            bookList.appendChild(bookElement);
        });
    }
}

document.addEventListener('DOMContentLoaded', filterAndSearchBooks);


