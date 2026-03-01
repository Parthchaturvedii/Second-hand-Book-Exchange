const router = require("express").Router();
const Book = require("../models/Book");
const auth = require("../middleware/authMiddleware");

// Add Book
router.post("/add", auth, async (req, res) => {
  const book = await Book.create({
    ...req.body,
    owner: req.user.id
  });

  res.json(book);
});

// Get All Books
router.get("/", async (req, res) => {
  const books = await Book.find().populate("owner", "name college");
  res.json(books);
});

// Delete Book
router.delete("/:id", auth, async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
});

module.exports = router;
