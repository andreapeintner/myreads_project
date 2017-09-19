import React, { Component } from 'react'
import PropTypes from 'prop-types'



class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
  state = {
    actualShelf: this.props.book.shelf
  }
  changeShelf = (event) => {
    this.props.changeShelf(this.props.book, this.props.value)
    this.setState({
      actualShelf: event.target.value
    })
  }

  render() {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select
              value={this.state.currentShelf}
              onChange={this.changeShelf}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
        </div>
      )
    }
  }

export default Book
