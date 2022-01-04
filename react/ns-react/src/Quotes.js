import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link, Route, Switch, useHistory } from "react-router-dom";

function AddQuote(props) {

    const history = useHistory();
    const [quote, setQuote] = useState({ content: '', author: '' });

    let setContent = (e) => {
        setQuote((quote) => { return { ...quote, content: e.target.value}});
    }

    let setName = (e) => {
        setQuote((quote) => { return { ...quote, author: e.target.value }});
    }

    let addQuote = async (e) => {
        let q = {
            ...quote,
            id: uuidv4()
        }
        const response = await fetch('https://ns-react-demo-default-rtdb.firebaseio.com/quotes.json', {
            method: 'POST',
            body: JSON.stringify(q),
        });
        const data = await response.json();

        history.push('/');
    }

    return (
        <div>
            <div>Adding a quote</div>
            <textarea value={quote.content} onChange={setContent} placeholder="Enter quote content"></textarea>
            <br />
            <input value={quote.author} onChange={setName} placeholder="Enter author's name" />
            <br />
            <button onClick={addQuote}>Add Quote</button>
            <br />
        </div>
    );
}

function Quote(props) {
    return (<div className="i-quote">
        <p className="i-quote-content">{props.quote.content}</p>
        <p className="i-quote-author"> - {props.quote.author}</p>
    </div>);
}

function AllQuotes(props) {

    const [quotes, setQuotes] = useState([]);

    useEffect(() => {
        fetch(quotesURL).then(res => res.json())
        .then(data => {
            let loadedQuotes = [];
            for (let key in data) {
                loadedQuotes.push(data[key]);
            }
            setQuotes(loadedQuotes);
        });
    }, []);

    const quotesURL = `https://ns-react-demo-default-rtdb.firebaseio.com/quotes.json`;

    return (
        <div>
            { quotes.map(dq => <Quote key={dq.id} quote={dq} />) }
        </div>
    );
}

function QuoteNavigator(props) {
    return (
        <div id="quotes-nav-bar">
            <h3 id="quotes-heading">Awesome Quotes</h3>
            <div id="quotes-navigation-div">
                <span><Link to="/">View</Link></span>
                <span><Link to="/add">Add</Link></span>
            </div>
        </div>
    );
}

function Quotes(props) {
    return (
        <div>
            <QuoteNavigator />
            <Switch>
                <Route path="/add">
                    <AddQuote />
                </Route>
                <Route path="/" exact>
                    <AllQuotes />
                </Route>
            </Switch>

        </div>
    );
}

export default Quotes;
