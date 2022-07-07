import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({tasks, onToggle}) {
	return (
		<div id='todo-list'>
			{tasks.map(task => (
				<TodoItem onToggle={onToggle} key={task.id} name={task.name} checked={task.checked} id={task.id}/>
			))}
		</div>
	);
}
