import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Landing from './Landing';
import TeacherList from './TeacherList';
import TeacherForm from './TeacherForm';
//propriedades são atributos que passa para uma tag/componente html
function Routes()
{
  return(
    <BrowserRouter>
      <Route path="/" exact component={Landing}/>
      <Route path="/study" component={TeacherList}/>
      <Route path="/give-classes" component={TeacherForm}/>
    </BrowserRouter>
  )
}

export default Routes;