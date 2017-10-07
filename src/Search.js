import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Debounce } from 'react-throttle'
import Book from './Book'

class Search extends Component{
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeBookshelf: PropTypes.func.isRequired
    };
    componentWillUnmount(){
      this.props.updateQuery("");
    }
    render(){
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <Debounce time="300" handler="onChange">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={(e) => this.props.updateQuery(e.target.value)}
                            />
                        </Debounce>
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.props.books.map((book) => (
                            <li key={book.id} className="contact-list-item">
                                <Book
                                    book={book}
                                    changeBookshelf={this.props.changeBookshelf}
                                   />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search



// function Search(props) {
//       return (
//         <div className="search-books">
//           <div className="search-books-bar">
//             <Link className="close-search" to="/">Close</Link>
//             <div className="search-books-input-wrapper">
//               <Debounce time="300" handler="onChange">
//                 <input
//                   type="text"
//                   placeholder="Search by title or author"
//                   onChange={(e) => props.updateQuery(e.target.value)}
//                 />
//               </Debounce>
//             </div>
//           </div>
//           <div className="search-books-results">
//             <ol className="books-grid">
//               {props.books.map((book) => (
//                 <li key={book.id} className="contact-list-item">
//                   <Book
//                     book={book}
//                     changeBookshelf={props.changeBookshelf}
//                   />
//                 </li>
//               ))}
//             </ol>
//           </div>
//         </div>
//       )
//     }
//
// export default Search
