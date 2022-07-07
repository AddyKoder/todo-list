import React from 'react';

import Heading from './components/Heading';
import TodoMain from './components/TodoMain';

import './components/styles/main.css'

export default function App() {
	return (
		<>
			<Heading content = "Todo App"/>
			<TodoMain />
		</>
	);
}
