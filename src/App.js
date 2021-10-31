
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AvoutHajj from './Components/AboutHajj/AvoutHajj';
import AddData from './Components/AddData/AddData';
import AllPackeg from './Components/HajjPackeg/AllPackeg';
import Packeg from './Components/HajjPackeg/Packeg';
import PackegDetail from './Components/HajjPackeg/PackegDetail';
import PackegTabs from './Components/Glearys/PackegTabs';
import Benner from './Components/Home/Benner/Benner';
import Login from './Components/Login/Login';
import MyBooking from './Components/MyBooking/MyBooking';
import PrivateRoute from './Components/PrivetRoute/PrivateRoute';
import Users from './Components/Users/Users';
import Contexprovider from './Contextapi/Contexprovider';
import Footer from './Shierd/Footer/Footer';
import Menubar from './Shierd/Header/Menubar';
import ManegeAllBook from './Components/ManegeAllBooking/ManegeAllBook';
import Update from './Components/Update/Update';
import Notfound from './Components/NotFuond/Notfound';

function App() {
  return (
    <div className="App">
      <Contexprovider>
        <Router>
          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Benner></Benner>
              <Packeg></Packeg>
              <AvoutHajj></AvoutHajj>
              <PackegTabs></PackegTabs>
            </Route>
            <Route exact path="/home">
              <Benner></Benner>
              <Packeg></Packeg>
              <AvoutHajj></AvoutHajj>
              <PackegTabs></PackegTabs>
            </Route>
            <Route exact path="/about">
              <AvoutHajj></AvoutHajj>
            </Route>
            <Route exact path="/packeg">
              <Benner></Benner>
              <Packeg></Packeg>
              <AvoutHajj></AvoutHajj>
            </Route>
            <PrivateRoute exact path="/packeg/:singlid">
            <PackegDetail></PackegDetail>
            </PrivateRoute>
            <PrivateRoute path="/allpackeg">
                <AllPackeg></AllPackeg>
            </PrivateRoute>
            <PrivateRoute path="/users">
                <Users></Users>
            </PrivateRoute>
            
            <Route exact path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/adddata">
              <AddData></AddData>
            </Route>
            <Route exact path="/manegeall">
              <ManegeAllBook></ManegeAllBook>
            </Route>
            <Route exact path="/manegeall/:id">
              <Update></Update>
            </Route>
            <Route exact path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </Contexprovider>
    </div>
  );
}

export default App;
