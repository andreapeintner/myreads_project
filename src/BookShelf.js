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
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    changeShelf={this.props.changeShelf}
                  />
                </li>
              ))}
            </ol>
          </div>
            <Link to="/search" className="open-search">open-search</Link>
        </div>

        /* <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div> */
    )
  }
}

export default BookShelf
