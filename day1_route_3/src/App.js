import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { useState } from 'react';

function App({bookFacade}) {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/products">
            <Products bookFacade={bookFacade} />
          </Route>
          <Route path="/add-book">
            <AddBook bookFacade={bookFacade} />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Header()
{
  return(
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
    </ul>
  );
}

function Home()
{
  return(
    <h2>Home</h2>
  );
}

function Products({bookFacade})
{
  const allBooks = bookFacade.getBooks();
  const allBooksList = allBooks.map(book => (
    <li key={book.id}>
      {book.title}
    </li>
    )
  );
  
  return(
    <div>
      <h2>Products</h2>
      <ul>
        {allBooksList}
      </ul>
    </div>
  );
}

function AddBook({bookFacade})
{
  const bookTemplate = { id: "", title: "", info: "" };
  const [book, setBook] = useState({...bookTemplate});

  const handleChange = event => 
  {
    const { id, value } = event.target;
    setBook({...book, [id]: value}); 
  };

  const handleSubmit = event => 
  {
    event.preventDefault();
    bookFacade.addBook(book);
    setBook({...bookTemplate});
  };

  return(
    <div>
      <h2>Add Book</h2>
      <div>
        <form>
          <input type="text" id="title" value={book.title} placeholder="Add title..." onChange={handleChange} />
          <br></br>
          <input type="text" id="info" value={book.info} placeholder="Add info..." onChange={handleChange} />
          <br></br>
          <input type="submit" value="Save" onClick={handleSubmit} />
        </form>
      </div>
    </div>
  );
}

function Company()
{
  return(
    <h2>Company</h2>
  );
}

function NoMatch()
{
  return(
    <div>
      <h2>Are you lost?</h2>
      <h3>Are you going to cry about it?</h3>
      <h4>Are you a little baby?</h4>
      <h5>Dude, just go back to one of our actual pages instead of trying to access sh*t we don't have!!</h5>
      <h6>*talks to co-worker* I'm so tired right now... We've worked our asses off to create good content and then this dumbass shows up and guess what..? He doesn't like any of our sh*t... What the heck???</h6>
    </div>
  );
}

export default App;
