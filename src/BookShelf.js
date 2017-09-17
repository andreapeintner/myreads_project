import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {
  render() {
    // const shelfs = [
    //   {"name": "Currently Reading", "id": "currentlyReading"},
    //   {"name": "Want to Read", "id": "wantToRead"},
    //   {"name": "Read", "id": "read "}
    // ]
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>

          <Book />

        </div>
        <Link to="/search" className="open-search">open-search</Link>
        {/* <div className="open-search">
          <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        </div> */}
      </div>
    )
  }
}

export default BookShelf
