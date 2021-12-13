
import React from 'react';

// controlled components

class EssayMaker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: '',
            vacStatus: false
        };
        this.handleNameInput = this.handleNameInput.bind(this);
        this.handleAgeInput = this.handleAgeInput.bind(this);
        this.handleVacStatus = this.handleVacStatus.bind(this);
    }

    handleNameInput(event) {
        this.setState({
            name: event.target.value,
        });
    }

    handleAgeInput(event) {
        this.setState({age: event.target.value});
    }

    handleVacStatus(event) {
        console.log(typeof event.target.value);
        this.setState({
            vacStatus: event.target.value === "true"
        });
    }

    render() {
        return (
            <div>
                <h3>Essay Maker</h3>
                <input placeholder="name" value={this.state.name} type="text" name="name" onChange={this.handleNameInput}></input>
                <input placeholder='age' value={this.state.age} type="number" name="age" onChange={this.handleAgeInput}></input>
                <br></br>
                Vaccinated: <select value={this.state.vacStatus} onChange={this.handleVacStatus}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <p>My name is {this.state.name}. I am {this.state.age} years old. I am { !this.state.vacStatus && 'not' } vaccinated.</p>
            </div>
        );
    }

}

// if vac -> 'I am vaccinated'
// if not vac -> 'I am not vaccinated'


// class Forms extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             inputValue: ''
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ inputValue: event.target.value });
//     }

//     handleSubmit(e) {
//         alert(`Value: ${this.state.inputValue}`)
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <h2>Froms</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     {/* <input type="text" value={this.state.inputValue} onChange={this.handleChange} /> */}
//                     <textarea value={this.state.inputValue} onChange={this.handleChange} />
//                     <input type="submit" value="Submit"></input>

//                     <input type="file"></input>
//                 </form>
//                 <p>Value: {this.state.inputValue}</p>
//             </div>
//         );
//     }

// }

export default EssayMaker;
