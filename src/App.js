import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchBooks: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }
  getBooksForShelf(shelfName){
    return this.state.books.filter((b) => b.shelf === shelfName)
  }
  changeShelf = (book, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([ book ])
      }))
    })
  }
    updateQuery = (query) => {
      if (!query) {
        this.setState({query: '', books: []})
      } else {
        this.setState({ query: query.trim() })
        BooksAPI.search(query).then((books) => {
          if(books.length){
              books.forEach((book, index) => {
                  let displayedBooks = this.state.books.find((b) => b.id === book.id)
                  book.shelf = displayedBooks ? displayedBooks.shelf : 'none'
                  book[index] = book
              })
              this.setState({
                searchBooks: books
              })
          } else {
              this.setState({
                  searchBooks: []
              });
            }
        })
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
            changeShelf={this.changeShelf}
            books={this.state.searchBooks}
            updateQuery={this.updateQuery}
            />
          )}
        />
      </div>
    )
  }
}
export default BooksApp
