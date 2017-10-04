import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

function Search(props) {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(e) => props.updateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.books.map((book) => (
                    <li key={book.id} className="contact-list-item">
                      <Book
                        book={book}
                        changeBookshelf={props.changeBookshelf}
                      />
                    </li>
                  ))}
                </ol>
              </div>
            </ol>
          </div>
        </div>
      )
    }

export default Search
