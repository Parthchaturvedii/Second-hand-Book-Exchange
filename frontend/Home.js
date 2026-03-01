const API = "http://localhost:5000/api";
const token = localStorage.getItem("token");

// If not logged in → go to login
if (!token) {
  window.location.href = "login.html";
}

// Logout
function logout() {
  localStorage.removeItem("token");
  window.location.href = "index.html";
}

// Fetch books
books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";

  card.innerHTML = `
    <h3>${book.title}</h3>
    <p>Author: ${book.author}</p>
    <p>Subject: ${book.subject}</p>
    <p>Condition: ${book.condition}</p>
    <p>Status: ${book.status}</p>
    <button onclick="requestExchange('${book._id}')">
      Request Exchange
    </button>
  `;

  container.appendChild(card);
});

fetchBooks();

async function requestExchange(bookId) {
  const token = localStorage.getItem("token");

  await fetch(`http://localhost:5000/api/exchange/request/${bookId}`, {
    method: "POST",
    headers: {
      "Authorization": token
    }
  });

  alert("Exchange Request Sent!");
}