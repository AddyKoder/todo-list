import React, {useRef} from 'react';

export default function TodoItem({ name, checked, id, onToggle }) {
	
	let inputRef = useRef(null);
	function handleChange(e) {
		onToggle(id, e.target.checked)
	}

	return (
		<div className='todo-item' >
			<input onChange={handleChange } ref={inputRef} className='item-checkbox' type='checkbox' id={`task${id}`} checked={checked} />
			<label className='item-label' htmlFor={`task${id}`}>{name}</label>
		</div>
	);
}
