const express = require("express");
const book = require("./book_model");
const { postABook, getAllBooks, getSingleBooks, updataBook, deleteBook } = require("./book_controller");
const verifyAdminToken = require("../middleware/verifyAdmin");
const router = express.Router();

// frontend => backend server => controller => book schema => database => 
    //send to server => back to the frontend
// post= when sumbit something frontend to the db
// get : when you get something from the database
// put/patch : when you just edit or update the data
// delete: Delete something from the database
// router.post("/create-book", async(req, res)=> {
//     try{
//         const newBook = await book({...req.body})
//         await newBook.save();
//         res.status(200).send({message: " Book posted successfully" , book: newBook})

//     }catch(error){
// console.log("Error here: ", error)
// res.status(300).send({message: "Book is not get here"})
//     }
// })
router.post("/create-book", verifyAdminToken, postABook)

// get all books
router.get("/", getAllBooks)
// single book endpoint

router.get("/:id" , getSingleBooks)
// update a book partially
router.put("/edit/:id" , verifyAdminToken,  updataBook)
// delete method successfully
router.delete("/:id", verifyAdminToken, deleteBook)
module.exports = router;