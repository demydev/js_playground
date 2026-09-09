const API_URL = 'http://localhost:3000/books';

async function getBooks() {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log('--- ALL BOOKS ---');
  console.table(data);
}

async function addBook(title, author) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, author })
  });
  const newBook = await response.json();
  console.log('--- BOOK CREATED ---', newBook);
}

async function deleteBook(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    console.log(`--- BOOK ${id} DELETED ---`);
  } else {
    console.error(`--- FAILED TO DELETE BOOK ${id}: ${response.status} ${response.statusText} ---`);
  }
}

async function runPractice() {
  await getBooks();
}

runPractice();