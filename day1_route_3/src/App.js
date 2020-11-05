import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
  Prompt,
  useHistory
} from "react-router-dom";
import React, { useState } from 'react';

function App({bookFacade}) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let history = useHistory();

  const setLoginStatus = status =>
  {
    setIsLoggedIn(status);
    history.push("/");
  };
  
  return (
    <Router>
      <div>
        <Header 
          loginMsg={isLoggedIn ? "Logout" : "Login"}
          isLoggedIn={isLoggedIn}
        />
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
          <Route path="/find-book">
            <FindBook bookFacade={bookFacade} />
          </Route>
          <Route path="/company">
            <Company />
          </Route>
          <Route path="/login-out">
            <Login
              loginMsg={isLoggedIn ? "Logout" : "Login"}
              isLoggedIn={isLoggedIn}
              setLoginStatus={setLoginStatus}
            />
          </Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </div>
    </Router>
  );
}

function Header({isLoggedIn, loginMsg})
{
  return(
    <ul className="header">
      <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
      <li><NavLink activeClassName="active" to="/products">Products</NavLink></li>
      {
        isLoggedIn && 
        (
        <React.Fragment>
          <li><NavLink activeClassName="active" to="/add-book">Add Book</NavLink></li>
          <li><NavLink activeClassName="active" to="/find-book">Find Book</NavLink></li>
        </React.Fragment>
        )
      }
      <li><NavLink activeClassName="active" to="/company">Company</NavLink></li>
      <li><NavLink activeClassName="active" to="/login-out">{loginMsg}</NavLink></li>
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
  let {path, url} = useRouteMatch();

  const allBooksList = allBooks.map(book => (
    <li key={book.id}>
      {book.title}
      &nbsp;
      <Link to={`${url}/${book.id}`}>details</Link>
    </li>
    )
  );

  const showDetails = bookID =>
  {
    return bookID;
  }
  
  return(
    <div>
      <div>
        <h2>Products</h2>
        <ul>
          {allBooksList}
        </ul>
      </div>
      <hr></hr>
      <Switch>
        <Route path={`${path}/:bookId`}>
          <Details bookFacade={bookFacade} />
        </Route>
      </Switch>
    </div>
  );
}

function AddBook({bookFacade})
{
  let [isBlocking, setIsBlocking] = useState(false);
  const bookTemplate = { id: "", title: "", info: "" };
  const [book, setBook] = useState({...bookTemplate});

  const handleChange = event => 
  {
    const { id, value } = event.target;
    setBook({...book, [id]: value}); 
    setIsBlocking(event.target.value.length > 0);
  };

  const handleSubmit = event => 
  {
    event.preventDefault();
    bookFacade.addBook(book);
    setBook({...bookTemplate});
    setIsBlocking(false);
  };

  return(
    <div>
      <h2>Add Book</h2>
      <div>
        <form>
          <Prompt when={isBlocking} message={() => "You have unsaved data. Press \"Cancel\" to keep your changes."} />
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

function Details({bookFacade})
{
  const {bookId} = useParams();
  const book = bookFacade.findBook(bookId);

  const showBook = book ? (
    <div className="showBooks">
      <p>Title: {book.title}</p>
      <p>ID: {book.title}</p>
      <p>Info: {book.info}</p>
    </div>
  ) : (
    <p>Book not found.</p>
  );
  
  return(
    <div>{showBook}</div>
  );
}

function FindBook({bookFacade})
{
  const [bookID, setBookID] = useState();
  const [book, setBook] = useState();

  const handleChange = event =>
  {
    setBookID(event.target.value);
  }

  const handleSubmit = event =>
  {
    event.preventDefault();
    const bookFound = bookFacade.findBook(bookID);
    setBook(bookFound);
  }

  const deleteBook = id =>
  {
    bookFacade.deleteBook(id);
    setBook(null);
    setBookID("");
  }

  return(
    <div>
      <form>
        <input type="text" id="bookId" placeholder="Enter book ID..." onChange={handleChange} />
        <input type="submit" value="Find Book" onClick={handleSubmit} />
      </form>

      {
        book &&
          <div>
            <div>
              <p>ID: {book.id}</p>
              <p>Title: {book.title}</p>
              <p>Info: {book.info}</p>
            </div>
            <div>
              <button onClick={() => deleteBook(book.id)}>Delete Book</button>
            </div>
          </div>
      }
    </div>
  );
}

function Login({isLoggedIn, loginMsg, setLoginStatus})
{
  const handleBtnClick = () =>
  {
    setLoginStatus(!isLoggedIn);
  };

  return (
    <div>
      <h2>{loginMsg}</h2>
      <button onClick={handleBtnClick}>{loginMsg}</button>
    </div>
  );
}

export default App;
