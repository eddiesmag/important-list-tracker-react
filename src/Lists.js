import React, { Component } from "react";
import List from "./List.js";
const uuidv4 = require("uuid");

class Lists extends Component {
	render() {
		const { lists, items, addItem } = this.props;

		if (lists.length === 0) {
			return (
				<div id="listsDiv" className="List">
					<h2>Add new lists to get started!</h2>
				</div>
			);
		}
		return (
			<div key={uuidv4()}>
				{lists.map((listName) => {
					return (
						<List
							name={listName}
							items={items[listName]}
							addItem={addItem.bind(this)}
							key={uuidv4()}
						/>
					);
				})}
			</div>
		);
	}
}

export default Lists;
