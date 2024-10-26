const Book = require("./book_model");
const book = require("./book_model");

const postABook = async(req, res) => {
    try{
        const newBook = await book({...req.body});
        await newBook.save();
        res.status(200).send(newBook)

    }catch(error){
console.log("Error here: ", error)
res.status(300).send({message: "Book is not get here"})
    }
}
// get all books
const getAllBooks = async(req , res)=> {
try{
const books = await Book.find().sort({createdAt: -1});
res.status(200).send(books);
}catch(error){
    console.error("Error in fetching books" , error);
    res.status(500).send({message: "Failed to fetch Error"});
}
}
const getSingleBooks = async(req, res)=>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id);
        if(!book){
            res.status(404).send({message: "Book not found"})
        }
        res.status(200).send(book);
    }catch(error){
        console.error("Error in fetching books" , error);
        res.status(500).send({message: "Failed to fetch Error"});
    }
}
// update
const updataBook = async(req , res) =>{
try {
    const {id} = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id , req.body , {new: true} )
    if(!updatedBook){
        res.status(404).send({message: "Book is not found!"})
    }
    res.status(200).send({
        message: "Book updated successfully",
        book:updatedBook
    })
} catch (error) {
    console.error("Error in updating a book", error);
    res.status(500).send({message: "Failed to update the book , the error"})
}
}

// delete method
const deleteBook = async(req, res)=>{
try {
    const {id} = req.params;
    const deleteBook =  await Book.findByIdAndDelete(id);
    if(!deleteBook){
        res.status(404).send({message: "Book is not delete!"})
    }
    res.status(200).send({
        message: "Book deleted  successfully",
        book:deleteBook
    })

} catch (error) {
    console.error("Error in deleting a book", error);
    res.status(500).send({message: "Failed to delete the book , the error"})
}
}
module.exports = {
    postABook , getAllBooks , getSingleBooks , updataBook,
    deleteBook
}