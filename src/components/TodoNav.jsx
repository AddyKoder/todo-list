import React from 'react';

export default function TodoNav({remaining, total, onCheckAll, onRemoveChecked}) {
	return (
		<>
			<hr />
			<div id='todo-nav'>
				<span>
					{remaining} left of {total}
				</span>
				<div className='actions'>
					<button onClick={onCheckAll}>Check All</button>
					<button onClick={onRemoveChecked}>Clear Checked</button>
				</div>
			</div>
		</>
	);
}
