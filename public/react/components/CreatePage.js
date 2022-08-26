import React, { Fragment, useState } from 'react'
// import Axios from 'axios'
import apiURL from '../api';

export function CreatePage(){
    
    const[pageTitle, setPageTitle] = useState('')
    const[pageContent, setPageContent] = useState('')
    const[pageStatus, setPageStatus] = useState('open')

    const[data, setData] = useState([{
        title: '',
        content: '',
        status: ''
    }])


    function handle(e){
        e.preventDefault()
    
        let titleString = JSON.stringify(pageTitle)
        titleString = titleString.replace(/"/g, '')
        let contentString = JSON.stringify(pageContent)
        contentString = contentString.replace(/"/g, '')
        let pageStatusString = JSON.stringify(pageStatus)
        pageStatusString = pageStatusString.replace(/"/g, '')

        const newdata = {...data}
        newdata.title = titleString
        newdata.content = contentString
        newdata.status = pageStatusString

        postPage(newdata);
    }
    


    const postPage = async (theData) => {
        console.log("POST REQUEST ATTEMPT")
        console.log("The TITLE: ",theData);
        
        //TITLE needs to be unique. Send error message to the user?
        await fetch(`${apiURL}/wiki/create`, {method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({title: theData.title, content: theData.content, status: theData.status})}); 

        console.log("POST REQUEST ATTEMPT")
        // navigate(`${apiURL}/home`)
    }



    return (
        <Fragment>
        <div className='PageContents'>
            <h1>Create a page</h1>
            <form className="theForm" onSubmit={(e) => handle(e)}>
                <p>Enter a title for your page</p>
                <input required type='text' id="title" name="title" placeholder='page title' onChange={event => setPageTitle(event.target.value)}></input>
                <p>Open or closed?</p>

                <input type='radio' value='open' name="status" onClick={event => setPageStatus(event.target.value)} checked/> Open
                <br></br>
                <input type='radio' value='closed' name="status" onClick={event => setPageStatus(event.target.value)}/> Closed

                <p>Enter your page contents</p>
                <textarea required id='content' name='content' cols="50" rows="10" type='text' placeholder='page contents' onChange={event => setPageContent(event.target.value)}></textarea>
                <br></br>
                <button type='submit'>Submit</button>
            </form>
            <br></br>
            <p>
                Page Title: {pageTitle}
            </p>
            <p>
                Page Content: {pageContent}
            </p>
            <p>
                Page Status: {pageStatus}
            </p>
        </div>

        </Fragment>

        // <Fragment>
        // <div className='PageContents'>
        //     <h1>Create a page</h1>
        //     <form class="theForm" method="POST">
        //         <p>Enter a title for your page</p>
        //         <input type='text' id="title" name="title" placeholder='page title' onChange={event => setPageTitle(event.target.value)}></input>

        //         <p>Enter your page contents</p>
        //         <textarea name='paragraph_text' cols="50" rows="10" type='text' placeholder='page contents' onChange={event => setPageContent(event.target.value)}></textarea>
        //         <br></br>
        //         <button type='submit'>Submit</button>
        //     </form>
        //     <br></br>
        //     <p>
        //         Page Title: {pageTitle}
        //     </p>
        //     <p>
        //         Page Content: {pageContent}
        //     </p>
        // </div>

        // </Fragment>
    )
}