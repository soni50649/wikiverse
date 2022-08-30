import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';
import { Page } from './Page';
import { PageContents } from './PageContents';
import { CreatePage } from './CreatePage';
import { HomePage } from './HomePage';
import { Deleted } from './DeletedPage';
import {CreationSuccessful} from './CreationSuccessful'
import {Switch, Route, Routes, BrowserRouter, Redirect, withRouter, NavLink, Link} from 'react-router-dom';
import apiURL from '../api';


export const App = () => {

	const [pages, setPages] = useState([]);
	const [selectedPages, setSelectedPages] = useState('')

	async function fetchPages(){
		try {
			console.log({apiURL})
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchPages();

	}, []);

	return (
		<BrowserRouter>
			<main>
				<div className='Sidebar'>
					<h1><Link to='/home'>Wikiverse</Link></h1>
					<Link to='/createpage'><h2>Create a page</h2></Link>
					<h2><style >An interesting 📚</></h2>

					<PagesList pages={pages} setSelectedPages={setSelectedPages}/>
				</div>
				<Routes>
					<Route index element={<HomePage />}/>
					<Route path='/home' element={<HomePage />}/>
					<Route path='/createpage' element={<CreatePage />}/>
					<Route path='/pagecontents' element={<PageContents selectedPages={selectedPages} setSelectedPages={setSelectedPages}/>}/>
					<Route path='/deletedpage' element={<Deleted />}/>
					<Route path='/creationsuccessful' element={<CreationSuccessful />}/>
				</Routes>

			</main>
		</BrowserRouter>

	)
}

export default App;

// export default withRouter(App);