/**
 * Created by siri on 2016-11-17.
 */

import React from 'react';

class BookList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            books:[
                { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
                { id: 2, name: 'Monk who sold his Fearrary', author: 'Robin Sharma' },
                { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
            ],
            selectedBooks: [],
            error: false
        };
    }

    _renderBook(book){
        return (
            <div className="checkbox" key={book.id}>
                <label>
                    <input type="checkbox" value={book.name} onChange={this.handleSelectedBooks.bind(this)}/>
                    {book.name} -- {book.author}
                </label>
            </div>
        );

    }

    _renderError() {
        if (this.state.error) {
            return (
                <div className="alert alert-danger">
                    {this.state.error}
                </div>
            );
        }
    }

    handleSubmit(event) {
        console.log(event);
        event.preventDefault();
        console.log("Form submitted");

        if(this.state.selectedBooks.length === 0) {
            this.setState({error: 'Please choose at least one book to continue'});
        } else {
            this.setState({error: false});
            this.props.updateFormData({ selectedBooks: this.state.selectedBooks });
        }
    }

    handleSelectedBooks(event) {
        var selectedBooks = this.state.selectedBooks;
        var index = selectedBooks.indexOf(event.target.value);

        if (event.target.checked) {
            if (index === -1)
                selectedBooks.push(event.target.value);
        } else {
            selectedBooks.splice(index, 1);
        }

        this.setState({selectedBooks: selectedBooks });
    }

    render() {
        var errorMessage = this._renderError();

        return (
            <div>
                <h3> Choose from wide variety of books available in our store </h3>
                {errorMessage}
                <form onSubmit={this.handleSubmit.bind(this)}>
                    { this.state.books.map((book) => { return (this._renderBook(book)); })}
                    <input type="submit" value="submit" className="btn btn-success" />
                </form>
            </div>
        );
    }

}

export default BookList;