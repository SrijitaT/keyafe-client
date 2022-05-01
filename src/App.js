import {useState,useEffect,useRef} from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from "./pages/shop/shop.component";
import Header from './components/header/header.component';
import { Container } from "react-bootstrap";
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import ProductDetails from './pages/productDetails/productDetails.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Profile from './pages/profile/Profile';
import { Switch,Route,BrowserRouter,Redirect } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions.js';
import "./App.css";
import MyProfile from './pages/profile/profileView/MyProfile';
import TrackOrder from './pages/profile/profileView/TrackOrder';
import OrderHistory from './pages/profile/profileView/OrderHistory';


function App() {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser)
 
 
  return (
    <Container fluid={true}>
    <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/shop/:id" component={ShopPage} />
      <Route exact path="/signin" render={()=> currentUser ? <Redirect to="/"/> : <SignInAndSignUpPage/>}/>
      <Route exact path="/checkout" component={CheckoutPage}/>
      {/*<Route exact path="/profile/dashboard" component={Dashboard}></Route>*/}
      <Route path="/description" component={ProductDetails}></Route>
      <Route path="/profile" component={Profile}></Route>
      <Route path="/Profile-page" component={MyProfile}></Route>
      <Route path="/Track-Orders" component={TrackOrder}></Route>
      <Route path="/Orders" component={OrderHistory}></Route>
    </Switch>
    </BrowserRouter>
    </Container>
   
  );
}

export default App;
