import React from 'react';
import { Page } from './Page';



export const PagesList = ({pages, setSelectedPages}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} key={idx} setSelectedPages={setSelectedPages}/>
			})
		}
	</>
} 
