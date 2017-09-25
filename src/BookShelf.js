import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }
  render() {
    const {title, books} = this.props
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    changeShelf={this.props.changeShelf}
                    // key={book.id}
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
}

export default BookShelf
