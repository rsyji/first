import Book from "./Book";
import BooksData from './BooksData.json'

// const book1 = {
//   imageAddress:
//     "https://images-eu.ssl-images-amazon.com/images/I/51Kmfmb1LCL._AC_SX184_.jpg",
//   title: "The Hidden Hindu",
//   auther: "Akshat Gupta",
//   price: "30",
// };

// const book2 = {
//   imageAddress:
//     "https://images-eu.ssl-images-amazon.com/images/I/31PgDdt8uiL._AC_SX184_.jpg",
//   title: "Yellow Face",
//   auther: "Rebecca F Kuang",
//   price: "28",
// };

// const collection =[{
//     imageAddress:
//       "https://images-eu.ssl-images-amazon.com/images/I/51Kmfmb1LCL._AC_SX184_.jpg",
//     title: "The Hidden Hindu",
//     auther: "Akshat Gupta",
//     price: "30",
//   },
//   {
//       imageAddress:
//         "https://images-eu.ssl-images-amazon.com/images/I/31PgDdt8uiL._AC_SX184_.jpg",
//       title: "Yellow Face",
//       auther: "Rebecca F Kuang",
//       price: "28",
//     }]


// const booksInfo= BooksData.response.books


const BooksList = () => {
  return (
    <div className="book-list">
      {/* <Book price = "30" auther= 'Akshat Gupta' title = 'The Hidden Hindu' imageAddress = 'https://images-eu.ssl-images-amazon.com/images/I/51Kmfmb1LCL._AC_SX184_.jpg'/> */}
      
      
      {/* <Book
        imageAddress={book1.imageAddress}
        title={book1.title}
        auther={book1.auther}
        price={book1.price}
      />
      <Book
        imageAddress={book2.imageAddress}
        title={book2.title}
        auther={book2.auther}
        price={book2.price}
      /> */}


      {BooksData.map(item=>(
         <Book
         imageAddress={item.imageAddress}
         title={item.title}
         auther={item.auther}
         price={item.price}
       />
      ))}


{/* {booksInfo.map(item=>(
         <Book
         imageAddress={item.imageAddress}
         title={item.title}
         auther={item.author}
         price={item.year}
       />
      ))} */}
    </div>
  );
};

export default BooksList;
