import React, { Component } from "react";
import ListItem from "./ListItem.js";
import AddItem from "./AddItem.js";
const uuidv4 = require("uuid");

class List extends Component {
	render() {
		const {name, items} = this.props;

		if (items) {
			return (
				<div id={name} key={uuidv4()}>
					<h2>{name} List</h2>
					<ul>
						{items.map( (item) => {
							return (
								<li key={uuidv4()}>
									<ListItem item={item} key={uuidv4()} />
								</li>
							);
						})}
					</ul>
					<AddItem idName={name} addItem={this.props.addItem.bind(this)} />
				</div>
			);
		}
		return (
			<div id={name} key={uuidv4()}>
				<h2>{name} List</h2>
				<AddItem idName={name} addItem={this.props.addItem.bind(this)} />
			</div>
		);
	}
}

export default List;
