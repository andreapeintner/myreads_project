import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeBookshelf: PropTypes.func.isRequired,
    updateQuery: PropTypes.func.isRequired
  }
    render () {
      const {books, changeBookshelf} = this.props
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(e) => this.props.updateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {books.map((book) => (
                    <li key={book.id} className="contact-list-item">
                      <Book
                        book={book}
                        changeBookshelf={changeBookshelf}
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
  }

export default Search
