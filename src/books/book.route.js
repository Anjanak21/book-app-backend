// const express=require('express');
// const Book = require('./book.model');
// const { postABook, getAllBooks,getSingleBook, UpdateBook,DeleteBook } = require('./book.controller');
// const verifyAdminToken = require('../middleware/verifyAdminToken');
// const router=express.Router();

// // post=when submit something from front end to db
// // get=when get something back from db
// // put/patch=when edit or update something
// // delete=when delete something
// // frontend=> backend=> controller=>controller=>bookschema=>database=>send to server=>
// // backto front end.

// router.post("/create-book",postABook)

// // get all books
// router.get("/",getAllBooks)
// // single book
// router.get("/:id",getSingleBook);
// // update a book
// router.put("/edit/:id",verifyAdminToken,UpdateBook);
// // delete a book
// router.delete("/delete/:id",verifyAdminToken,DeleteBook);
// module.exports=router;
const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, DeleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router =  express.Router();

// frontend => backend server => controller => book schema  => database => send to server => back to the frontend
//post = when submit something fronted to db
// get =  when get something back from db
// put/patch = when edit or update something
// delete = when delete something

// post a book
router.post("/create-book", verifyAdminToken, postABook)

// get all books
router.get("/", getAllBooks);

// single book endpoint
router.get("/:id", getSingleBook);

// update a book endpoint
router.put("/edit/:id", verifyAdminToken, UpdateBook);

router.delete("/delete/:id", verifyAdminToken, DeleteBook)


module.exports = router;
