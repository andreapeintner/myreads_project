import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'



class Book extends Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  render() {
    return (
        <ol className="books-grid">
          {this.state.books.map((book) => (
            <li key={book.id} className="book-top">
              <div
                className="book-cover"
                style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}} />
              <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </li>
          ))}
        </ol>
    )
  }
}




export default Book
