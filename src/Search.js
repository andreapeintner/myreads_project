import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class Search extends Component {
  static propTypes = {
      books: PropTypes.array.isRequired,
      changeShelf: PropTypes.func.isRequired
    }
    updateQuery = (query) => {
        this.props.updateQuery(query.trim());
    };
    render () {
      return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={(e) => this.updateQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.props.books.map((book) => (
                    <li key={book.id} className="contact-list-item">
                      <Book
                        book={book}
                        changeShelf={this.props.changeShelf}
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
