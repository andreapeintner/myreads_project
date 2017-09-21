import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchedBooks: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }
  getBooksForShelf(shelfName){
    return this.state.books.filter((b) => b.shelf === shelfName)
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
                  title="Currently reading"
                  books={this.getBooksForShelf("currentlyReading")}
                  changeShelf={this.changeShelf}
                />
                <BookShelf
                  title="Want to read"
                  books={this.getBooksForShelf("wantToRead")}
                  changeShelf={this.changeShelf}
                />
                <BookShelf
                  title="Read"
                  books={this.getBooksForShelf("read")}
                  changeShelf={this.changeShelf}
                />
              </div>
            </div>
          </div>
          )}
        />
        <Route path="/search" render={( {history} ) => (
          <Search
            onMoveBook={this.moveBook}
            booksOnShelf={this.state.books}
            />
          )}
        />
      </div>
    )
  }
}
export default BooksApp
