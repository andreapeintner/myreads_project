import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeBookshelf: PropTypes.func.isRequired
  }
  changeBookshelf = (event) => {
    this.props.changeBookshelf(this.props.book, event.target.value)
  }
  render () {
    const {book} = this.props
    return (
      <div className="book">
       <div className="book-top">
         <div className="book-cover" style={{ height: 192, width: 128, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : `https://books.google.com/googlebooks/images/no_cover_thumb.gif`})` }}></div>
          <div className="book-shelf-changer">
            <select
              value={book.shelf}
              onChange={this.changeBookshelf}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
       </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
