import React from 'react';

class APICallingComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            isErr: false,
            isLoading: true,
        }
        this.randomDog = this.randomDog.bind(this);
    }

    fetchDog() {
        this.setState({
            isLoading: true
        });
        fetch(`https://dog.ceo/api/breeds/image/random`)
        .then(res => res.json())
        .then(
            data => {
                this.setState({ 
                    url: data.message,
                    isLoading: false,
                    isErr: false
                })
            }, 
            error => {
                this.setState({
                    isLoading: false,
                    isErr: true
                });
            }
        );
    }

    componentDidMount() {
        this.fetchDog(); 
    }

    randomDog() {
        this.fetchDog();
    }

    render() {
        return (
            <div>
                <button onClick={this.randomDog}>Random Dog</button>
                <br />
                { this.state.isErr && <p>An error has occured</p> }
                { this.state.isLoading && <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" />}
                { !this.state.isErr && !this.state.isLoading && <img src={this.state.url} alt="Dog" />}
            </div>
        );
    }

}

export default APICallingComponent;

