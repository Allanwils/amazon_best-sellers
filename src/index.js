import ReactDOM from 'react-dom/client';

import './index.css';
import { books } from './books';
import Book from './Book';

function BookList() {
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
      {books.map((book, index) => {
        console.log(book);
        //const { img, title, author, id } = book; //This can also be removed if we use approach below
        return (
          //<Book  img={img} title={title} author ={author} key={id}/> or
          //<Book  book={book} key={id}/> or use spread operator below
          <Book {...book} key={book.id} number={index}/> 
        );
      })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);
