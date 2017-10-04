import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function BookShelf(props) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {props.books.map((book) => (
            <li key={book.id}>
              <Book
                changeBookshelf={props.changeBookshelf}
                book={book}
              />
            </li>
          ))}
        </ol>
      </div>
      <Link to="/search" className="open-search">open-search</Link>
    </div>
  )
}

export default BookShelf
