import React, {useRef} from 'react'

export default function TodoAdd({ onAdd}) {
	let taskInputRef = useRef(null);

	function handleEnter(e){
		if (e.keyCode === 13) {
			callHandler();	
		}
	}
	function callHandler(){
		onAdd(taskInputRef.current.value)
		taskInputRef.current.value = ''
	}
	
  return (
	  <div id='add-todo-div'>
		  <input onKeyDown={handleEnter} ref = {taskInputRef} type='text' placeholder='Task Name' />
		  <button onClick={callHandler}>Add</button>
	  </div>
  )
}
