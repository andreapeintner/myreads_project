import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Book from './Book'
// import serializeForm from 'form-serialize'


class Search extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  }
  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

   render() {
     let showingBooks
     if (this.state.query) {
       const match = new RegExp(escapeRegExp(this.state.query), 'i')
       showingBooks = this.props.books.filter((book) => match.test(book.title))
     } else {
       showingBooks = this.props.books
     }
     showingBooks.sort(sortBy('title'))
     return (
       <div className="search-books">
         <div className="search-books-bar">
           <Link to="/" className="close-search"></Link>
           <div className="search-books-input-wrapper">
             <input
               type="text"
               placeholder="Search by title or author"
               value={this.state.query}
               onChange={(event) => this.updateQuery(event.target.value)}
              />
           </div>
         </div>
         <div className="search-books-results">
           {/* <Book
             books={showingBooks}
           /> */}
           <ol className="books-grid">
             {showingBooks.map((book) => (
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
         </div>
       </div>
     )
   }
 }

export default Search
