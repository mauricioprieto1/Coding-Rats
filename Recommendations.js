function Recommendations({ books }) {
    return (
      <section id="recommendations">
        <h2>Book Recommendations</h2>
        <div id="book-list">
          {books.map((book, index) => (
            <div className="book" key={index}>
              <h3>{book.title}</h3>
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Description:</strong> {book.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Recommendations;
  