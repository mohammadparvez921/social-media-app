
import './App.css';
import LeftBar from './components/leftBar/LeftBar';
import Navbar from './components/navbar/Navbar';
import RightBar from './components/rightBar/RightBar';
import Home  from './pages/home/Home.jsx';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';
import Register from './pages/register/Register';
import {
  createBrowserRouter,
  RouteProvider,
  Route,
  RouterProvider,
  Outlet,
}from "react-router-dom";

function App() {

  const Layout =()=>{
    return(
      <div>
         <Navbar/>
         <div style={{display : "flex"}}>
          <LeftBar/>
          <Outlet/>
          <RightBar/>
         </div>
      </div>
    )
  }
  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile/>
        }
      ]
    },
    {
    path:"/login",
    element:<Login/>,

  },{
    path:"/register",
    element:<Register/>,
  }])
  return (
    <div className="App">

    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
