import axios from "axios";

const GBook = axios.create({
  baseURL: "https://www.googleapis.com/books/v1",
});



const getBooksByTerm = (SearchTerm, setBooks, page_number, setTotalPages) => {
  GBook.get("/volumes/", {
    params: {
      q : SearchTerm,
      key: "AIzaSyDZrUhwZpkOFphfQAFlf9bqX2PGBAxdc9s",
      page:page_number
    },
  }).then((response) => {
    console.log(response.data)
    setBooks(response.data.items);
    if(response.data.totalItems%10==0){
      setTotalPages(parseInt((response.data.totalItems)/10));
    }
    else{
    setTotalPages(parseInt((response.data.totalItems)/10)+1);
    }
    

  });
};

const getBookDetails = (volumeId, setCurrentBook) => {
  
  GBook.get("/volumes/" + volumeId).then((response) => {
    console.log(response.data);
    console.log("volumeId = ",volumeId);

    setCurrentBook(response.data);
  });
};

export { getBooksByTerm, getBookDetails };
