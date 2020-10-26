import React, { Component } from "react";

class ListItem extends Component {
	constructor(props) {
		super(props);
		this.state = { color: "black", marked: false };
	}

	handleClick() {
		// Implement this function!
		this.setState({ marked: !this.state.marked });
	}

	render() {
		const item = this.props.item;
		const { color, marked } = this.state;

		return (
			<span
				onClick={this.handleClick.bind(this)}
				style={{ color: marked ? "grey" : color }}
			>
				<strong>{item.name}</strong>
			</span>
		);
	}
}
export default ListItem;
