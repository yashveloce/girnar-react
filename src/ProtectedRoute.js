import React,{Component, useEffect} from 'react';
import {useHistory } from 'react-router-dom';

function ProtectedRoute(props) {
  const Component = props.component;
  const history = useHistory();
  useEffect(()=>{
    if(!localStorage.getItem('authenticated'))
    {
      history.push('/login')
    }
  },[])
  return <div>
    <Component {...props}/>
  </div>;
}

export default ProtectedRoute;
