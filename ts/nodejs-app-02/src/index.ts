import express, { Request, Response } from "express";
// khởi tạo Express Server
const app = express();
app.use(express.json()); // Express sẽ tự động parse JSON body

// khởi tạo mảng lưu sách
let books: Book[] = [];
let nextId = 1;

// Khởi tạo http method: GET /books
app.get("/books", (req: Request, res: Response) => {
  res.json(books);
});

// POST /books
app.post("/books", (req: Request, res: Response) => {
  const { title, author, description, year } = req.body;

  if (!title || !author || !description || !year) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const book: Book = {
    id: nextId++,
    title,
    author,
    description,
    year: Number(year),
  };

  books.push(book);
  res.status(201).json(book);
});

app.put("/books/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const book = books.find((i) => i.id === id);

  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }

  const { title, author, description, year } = req.body;
  book.title = title ?? book.title; // ?? check value = undefined | null
  book.author = author ?? book.author;
  book.description = description ?? book.description;
  book.year = year ?? book.year;

  res.json(book);
});

// DELETE
app.delete("/books/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = books.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Book not found" });
  }

  books.splice(index, 1);

  res.status(204).send();
});

// DELETE ALL
app.delete("/books", (req: Request, res: Response) => {
  if (books.length === 0) {
    return res.status(404).json({ message: "There is no book to delete." });
  }
  books.splice(0, books.length);
  nextId = 1;
  res.status(204).send();
});

app.listen(9999, () => {
  console.log("Server is running at http://localhost:9999");
});
