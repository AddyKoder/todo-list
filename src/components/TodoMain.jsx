import React, { Component } from 'react';

import TodoAdd from './TodoAdd';
import TodoNav from './TodoNav';
import TodoList from './TodoList';

export default class TodoMain extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: JSON.parse(localStorage.getItem('tasks'))?.tasks || [],
		};

		//binding all methods
		this.addHandler = this.addHandler.bind(this);
		this.toggleHandler = this.toggleHandler.bind(this);
		this.checkAllHandler = this.checkAllHandler.bind(this);
		this.removeCheckedHandler = this.removeCheckedHandler.bind(this);
		this.createStateCopy = this.createStateCopy.bind(this);
	}

	setState(...args) {
		super.setState(...args);
		localStorage.setItem('tasks', JSON.stringify(arguments[0]));
	}

	render() {
		return (
			<>
				<TodoAdd onAdd={this.addHandler} />
				<TodoNav
					total={this.state.tasks.length}
					remaining={this.state.tasks.filter(t => t.checked === false).length}
					onCheckAll={this.checkAllHandler}
					onRemoveChecked={this.removeCheckedHandler}
				/>

				<TodoList tasks={this.state.tasks} onToggle={this.toggleHandler} />
			</>
		);
	}

	createStateCopy() {
		return { tasks: [...this.state.tasks] };
	}

	addHandler(taskName) {
		if (!taskName.trim()) return;
		let stateCopy = this.createStateCopy();
		stateCopy.tasks.unshift({
			id: this.state.tasks[0]?.id + 1 || 1,
			name: taskName,
			checked: false,
		});
		this.setState(stateCopy);
	}
	toggleHandler(taskId, value) {
		let stateCopy = this.createStateCopy();
		stateCopy.tasks = [...stateCopy.tasks];
		stateCopy.tasks = stateCopy.tasks.map(i => {
			if (i.id === taskId) {
				i.checked = value;
				return i;
			}
			return i;
		});
		this.setState(stateCopy);
	}
	checkAllHandler() {
		let stateCopy = this.createStateCopy();
		stateCopy.tasks = [...stateCopy.tasks];
		stateCopy.tasks = stateCopy.tasks.map(i => {
			i.checked = true;
			return i;
		});
		this.setState(stateCopy);
	}
	removeCheckedHandler() {
		let stateCopy = this.createStateCopy();
		stateCopy.tasks = [...stateCopy.tasks];
		stateCopy.tasks = stateCopy.tasks.filter(i => i.checked === false);
		this.setState(stateCopy);
	}
}
