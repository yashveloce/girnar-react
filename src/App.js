
import './App.css';
import React, { useState,useEffect } from 'react'
import Inquiry from './components/inquiry_generation';
import Login from './components/Login';
import POGeneration from './components/POGeneration';
import Quotation from './components/Quotation';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Registration from './components/Registration';
import Header from './Header';
import Menu from './Menu';
import ProtectedRoute from './ProtectedRoute';
import InspectionReport from './components/InspectionReport';
import Layout from './Layout';

function App() {
  // const [property,setProperty]=useState();
  //   useEffect(()=>{
  //       const interval = setInterval(() => {
  //         if(localStorage.getItem('authenticated') === 'true'){
  //           localStorage.setItem('property','block')
  //         }else{
  //         localStorage.setItem('property','none')
  //         }
  //         }, 0.1);
  //         return () => clearInterval(interval);
         
  //   },[property]) 
  
  return (
    <>
    
      <BrowserRouter>
     
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Registration}></Route>
          <Route exact path="/">
            <ProtectedRoute component={Dashboard} layout={<Layout />}/>
          </Route>
          <Route exact path="/inquiry">
            <ProtectedRoute component={Inquiry} />
          </Route>
          <Route exact path='/po_generation'>
            <ProtectedRoute  component={POGeneration} />
          </Route>
          <Route exact path='/quotation'>
          <ProtectedRoute  component={Quotation} />
          </Route>
          <Route exact path='/inspection_report'>
          <ProtectedRoute exact  component={InspectionReport} />
          </Route>
          
          
          
          
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
