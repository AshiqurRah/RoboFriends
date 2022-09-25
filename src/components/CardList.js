import React from 'react';
import Card from './Card';

const CardList = ({robots})=> {
	return(
		<div>
			{
				robots.map(user=> {
					return (<Card 
						key={user.id} 
						id={user.id} 
						name={user.name} 
						email={user.email}
						/>)
		// key attribute is required for react to know which component to act upon
		// next time
				})
			}
  		</div>
	);
}


export default CardList;