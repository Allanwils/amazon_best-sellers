const Book = (props) => {
  const { img, title, author, number } = props; // or use const { img, title, author} = props.book;
  console.log(number);

  // we can also use inline function to get the id of the book as seen below
  //const getSingleBook = () =>{
  // getBook(id);
  //}
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <span className="number">{'#' + (number + 1)}</span>
    </article>
  );
};

export default Book;