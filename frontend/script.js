async function fetchBooks() {
    const res = await fetch("https://student-portal-3-8bbc.onrender.com/api/books");
    const books = await res.json();

    container.innerHTML = ""; // Fixed typo

    books.forEach(book => {
        const card = document.createElement("div");
        card.className = "book-card";

        card.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Subject:</strong> ${book.subject}</p>
            <p><strong>Condition:</strong> ${book.condition}</p>
            <p><strong>Owner:</strong> ${book.owner?.name || "Unknown"}</p> 
        `; // Fixed typo 'ownwe' and added fallback
        container.appendChild(card);
    });
}

fetchBooks(); // Just call it directly