import React, { useState, useEffect } from 'react';
import {Switch, Route, Routes, BrowserRouter, Redirect, withRouter, NavLink, Link} from 'react-router-dom';
import { PageContents } from './PageContents';


export const Page = ({page, setSelectedPages}) => {


  return <>
    {/* <h3><a href={props.page.slug}>{props.page.title}</a></h3> */}
    <div>
    <Link to='/pagecontents' onClick={() => {setSelectedPages(page.slug)}}><h3>{page.title}</h3></Link>
    </div>
    {/* <PageContents selectedPage={selectedPage} /> */}
  </>

  
} 
