import React, { useState, useEffect } from "react";
import { Home, Posts, AccountForm, Create, Profile } from "./components";
import { Route, Switch, Link, useHistory } from "react-router-dom";import './src.css'
import { fetchPosts, fetchMe } from "./api/api";
import './src.css'

const App = () => {
    const [posts, setPosts] = useState([]);
    const [token, setToken] = useState(
      window.localStorage.getItem("token") || null
    );
    const [me, setMe] = useState(null);
    console.log(me)
    console.log("token:", token)

  const history = useHistory();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const result = await fetchPosts();
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);
  useEffect(() => {
    if (token) {
      const getMe = async () => {
        const { username } = await fetchMe(token);
        setMe(username);

        console.log(username)
      };
      getMe();
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      window.localStorage.setItem("token", token);
    } else {
      window.localStorage.removeItem("token");
    }
  }, [token]);
  


  const logOut = () => {
    setToken("");
    setMe(null);
    history.push("/");
  };

  return (
    <div className="container">
      <nav className="ui secondary menu">
        <Link className="nav" to="/">
          Home
        </Link>
        <Link className="nav" to="/Posts">
          Posts
        </Link>
        <Link className="nav" to="/Profile">
          Profile
        </Link>
        <div>
          {token ? (
            <button onClick={logOut} className="nav">
              Log Out
            </button>
          ) : (
            <>
              <Link className="nav" to="/account/login">
                Log In
              </Link>
              <Link className="nav" to="/account/register">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
      <Switch>
        <Route exact path="/">
          <Home me={me} />
        </Route>
        <Route className="nav" path="/Posts">
          <Create token={token} setPosts={setPosts} />
          <Posts posts={posts} />
        </Route>
        <Route className="nav" path="/Profile">
          <Profile token={token}/>
        
        </Route>

        <Route className="nav" path="/account/:action">
          <AccountForm setToken={setToken} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
