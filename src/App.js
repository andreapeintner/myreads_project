import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import Search from './Search'
import { Route } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import Book from './Book'
import './App.css'

class BooksApp extends Component {
  state = {
    books: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  searchBook(book) {
    BooksAPI.create(book).then(book => {
      this.setState(state => ({
        books: state.books.concat([ book ])
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  books={this.state.books.title}/>
              </div>
            </div>
          </div>
          )}
        />
        <Route path="/search" render={( {history} ) => (
          <Search
            onSearchBook={(book) => {
                this.searchBook(book)
                history.push('/')
              }}
            books={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}
export default BooksApp
