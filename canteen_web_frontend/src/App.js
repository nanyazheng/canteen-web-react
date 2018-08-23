import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => (
  <Router>
    <div>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/register" component={Signup} />
      </Switch>
    </div>
  </Router>
)

const Login = () => (
  <div>
    <form action="/user/login" method="post">
      <label>username</label>
      <input type="text" name="username" />
      <label>password</label>
      <input type="text" name="password" />
      <button type="submit">login</button>
    </form>
    <Link to="/register">Sign Up</Link>
  </div>
)

const Signup = () => (
  <div>
    <form action="/user/register" method="post">
    <label>Username</label>
    <input type="text" name="username" placeholder="philbarrassi" className="form-control" />
    <label>Email</label>
    <input type="text" name="email" placeholder="xxx@stevens.edu" className="form-control" />
    <label>First Name</label>
    <input type="text" name="firstname" placeholder="Phil" className="form-control" />
    <label>Last Name</label>
    <input type="text" name="firstname" placeholder="Ba" className="form-control" />
    <label>Password</label>
    <input type="password" name="password" placeholder="Your Password" className="form-control" />
    <label>Confirm</label>
    <input type="password" name="confirm" placeholder="Your Password" className="form-control" />
    <label>Question</label>
    <select id="select_change" name="question">
      <option value="color">What is your favorite color? </option>
      <option value="food">What is your favorite food?</option>
      <option value="birthday">When is your birthday?</option>
      <option value="lucky">What is your lucky number?</option>
    </select>
    <label>Answer</label>
    <input type="text" name="answer" className="form-control" />
    <button type="submit" className="btn btn-primary" value="signup">Sign Up</button>
    </form>
    <p>Already have an account? <Link to="/">Login</Link></p>
  </div>
)

export default Home;
