import React, { Component } from "react";
import Lists from "./Lists.js";
import AddList from "./AddList.js";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			lists: [],
			items: {},
		};
	}

	handleAddList(listName) {
		let { lists, items } = this.state;
		if (lists.indexOf(listName) === -1) {
			lists.unshift(listName);
			items[`${listName}`] = [];
			this.setState({ lists: lists, items: items });
		} else {
			alert("list already exists!");
		}
	}

	handleAddItem(listItem) {
		let items = this.state.items;
		const lists = this.state.lists;
		for (let i = 0; i < lists.length; i++) {
			const list = lists[i];
			if (listItem.id === list) {
				items[list].push(listItem);
				this.setState({ items: items });
			}
		}
	}

	render() {
		return (
			<div className="App">
				<AddList addList={this.handleAddList.bind(this)} />

				<div id="listsDiv" className="List">
					<Lists
						lists={this.state.lists}
						items={this.state.items}
						addItem={this.handleAddItem.bind(this)}
					/>
				</div>
			</div>
		);
	}
}

export default App;
