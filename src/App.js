
import './App.css';
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";
import ManagerDashboard from "./components/Dashboard/ManagerDashboard";
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Navbar from "./components/Navbar/Navbar";
import CreateUser from './components/CreateUser/CreateUser';
import CreateWork from './components/CreateWork/CreateWork';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import UserDashboard from './components/Dashboard/UserDashboard';
import GetUsers from './components/GetUser/GetUsers';
import ProtectedRoute from './components/ProtectedRoute';
import GetWorkLog from './components/GetWorkLog/GetWorkLog';


function App() {
  return (
    //ffffffffff//
    <Router>
   <Navbar/>
    <Switch>
    <Route  exact path="/" component={Login} />
    <ProtectedRoute  path="/manager" component={ManagerDashboard} />
    <ProtectedRoute   path="/user" component={UserDashboard} />
    <ProtectedRoute  path="/signup" component={SignUp}/>
    <ProtectedRoute  path="/admin" component={AdminDashboard}/>
    <ProtectedRoute path="/createuser" component={CreateUser}/>
    <ProtectedRoute path="/creatework" component={CreateWork}/>
    <ProtectedRoute path="/getusers" component={GetUsers}/>
    <ProtectedRoute path="/getworklogs" component={GetWorkLog}/>
   
    
   
    </Switch>
  </Router>
  );
}

export default App;
