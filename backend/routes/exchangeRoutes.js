const router = require("express").Router();
const Exchange = require("../models/exchange");
const Book = require("../models/Book");
const auth = require("../middleware/authMiddleware");

// Send exchange request
router.post("/request/:bookId", auth, async (req, res) => {
  const exchange = await Exchange.create({
    book: req.params.bookId,
    requester: req.user.id
  });

  res.json(exchange);
});

// Accept exchange
router.put("/accept/:id", auth, async (req, res) => {
  const exchange = await Exchange.findById(req.params.id).populate("book");

  exchange.status = "accepted";
  await exchange.save();

  // Mark book as exchanged
  await Book.findByIdAndUpdate(exchange.book._id, {
    status: "exchanged"
  });

  res.json({ message: "Exchange accepted" });
});

// Get my requests
router.get("/my-requests", auth, async (req, res) => {
  const requests = await Exchange.find({ requester: req.user.id })
    .populate("book");

  res.json(requests);
});

module.exports = router;
