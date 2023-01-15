import { Component } from "react";
import imgBag from './bag.jpg'

export class Grocery extends Component {
    state = {
        entryfield: "",
        productlist: []
    }

    // newLetter (s){
    //     console.log (s.target.value)
    // }

    // newProduct (e) {
    //     console.log (e.target.value)
    // }

    newProduct (apple) {
        this.setState({entryfield: apple});
        console.log (apple)
    }

    addProduct (abc) {
        if ( abc === '') {alert ("Please enter an item") }
        else {
            let listArray = this.state.productlist;
            listArray.push(abc);
            this.setState({productlist: listArray, entryfield: ""})
            console.log(listArray)
        }
    }

    deleteProduct(){
        let listArray = this.state.productlist;
            listArray = [];
            // listArray.length = 0;
            this.setState({productlist: listArray})
    }

    crossedword (asd) {
        const li= asd.target;
        li.classList.toggle('crossed')
    }

    onFormSubmit (e) {
        e.preventDefault();
    }


    render () {
        return (
            <div >
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
                    {/* <input type="text" placeholder="Check" 
                    onChange={this.newLetter} /> */}
                    {/* <input type="text" placeholder="What are you whant to buy?" 
                    onChange={this.newProduct} value={this.state.entryfield} /> */}
                    <input type="text" placeholder="What are you whant to buy?" 
                    onChange={(apple) => this.newProduct(apple.target.value)} value={this.state.entryfield} />
                </div>
                <div className="container">
                    <button onClick={() => this.addProduct(this.state.entryfield)} className="btn add" >Add</button>
                </div>
                <ul>
                    {this.state.productlist.map((i, ind) => (
                    <li onClick={this.crossedword} key={ind}>
                        <img src={imgBag} alt="bag" width="20px"/> {i}</li>
                    ))}
                </ul>
                <div className="container">
                    <button onClick={() => this.deleteProduct(this.state.entryfield)} className="btn delete">Delete</button>
                </div>
            </form>
            </div>
        )
        
    }
}