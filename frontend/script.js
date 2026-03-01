const container = document.getElementById("bookContainer");

async function fetchBooks() {
    const res = await fetch("https://localhost:5000/api/books");
    const books = await res.json();

    conatainer.innerHTML ="";

    books.forEach( book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
        <h3>${book.title}</h3>
        <p><strong>Author:</strong> ${book.author} </p>
        <p><strong>Subject:</strong> ${book.subject} </p>
        <p><strong>Condition:</strong> ${book.condition} </p>
        <p><strong>Owner:</strong> ${book.ownwe?.name} </p>
        `;

        container.appendChild(card);
    });
}

if(condition) fetchBooks();