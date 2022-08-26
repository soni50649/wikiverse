import React, { useEffect, useState } from 'react';
import { Page } from './Page';
import apiURL from '../api';
import showDeletedPage from './App';


export const PageContents = ({selectedPages}) => {

    const [currentPage, setCurrentPage] = useState('')

    // GET request to get specific page by slug
    const getPage = async () => {
        const response = await fetch(`${apiURL}/wiki/${selectedPages}`); // Need to pass in the slug to here
        const pageData = await response.json()
        setCurrentPage(pageData)
        // console.log(currentPage.createdAt.slice(0, 2));
    }

    const deletePage = async () => {
        const response = await fetch(`${apiURL}/wiki/${selectedPages}`, {method: "DELETE"})
        // const deletedPage = await response.json()

    }

    useEffect(() => {getPage()}, [selectedPages])
    
    return (
    
        <div className='PageContents'>
            <h1>{currentPage.title}</h1>
            <h3>Published: {currentPage.createdAt}</h3>
            <br></br>
            <h2>{currentPage.content}</h2>
            <br></br>
            {/* <h4>{currentPage.slug}</h4> */}
            <p onClick={deletePage}><a href='/deletedpage'>Delete this page</a></p>
        </div>
        
    )
}