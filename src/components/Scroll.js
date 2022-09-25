import React from 'react';

const Scroll = (props) => {
	return (
		// {} means javascript,{{}} is an object
		<div style={{overflowY: 'scroll', border:'1px solid black', height:'800px'}}>
			{props.children}
		</div>
	);
}

export default Scroll;