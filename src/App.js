import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    booksFromSearch: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  getBooksForShelf(shelfName){
    return this.state.books.filter((b) => b.shelf === shelfName)
  }
  changeBookshelf = (book, newShelf) => {
    if (book.shelf !== newShelf) {
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }))
      })
    }
  }
  updateQuery = (query) => {
    if (query) {
      BooksAPI.search(query, 10).then((books) => {
        if(books.length){
          books.map((book) => {
            const displayedBooks = this.state.books.find((b) => b.id === book.id)
            book.shelf = displayedBooks ? displayedBooks.shelf : 'none'
            return book;
          })
          this.setState({
            booksFromSearch: books
          })
        }
      }).catch((e) => {
        this.setState(
          {booksFromSearch: []}
        )
      })
    } else {
      this.setState(
        {booksFromSearch: []}
      )
    }
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
                  changeBookshelf={this.changeBookshelf}
                />
                <BookShelf
                  title="Want to read"
                  books={this.getBooksForShelf("wantToRead")}
                  changeBookshelf={this.changeBookshelf}
                />
                <BookShelf
                  title="Read"
                  books={this.getBooksForShelf("read")}
                  changeBookshelf={this.changeBookshelf}
                />
              </div>
            </div>
          </div>
          )}
        />
        <Route path="/search" render={({history}) => (
          <Search
            changeBookshelf={this.changeBookshelf}
            books={this.state.booksFromSearch}
            updateQuery={this.updateQuery}
            />
          )}
        />
      </div>
    )
  }
}
export default BooksApp
