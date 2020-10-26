import React, { Component } from "react";

class AddItem extends Component {
	constructor() {
		super();
		this.state = {
			newItem: {},
		};

		this.keyId = React.createRef();
		this.form = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();
		const item = this.keyId.current.value;
		const id = this.props.idName;
		if (item === "") alert("Enter item!");
		else
			this.setState({ newItem: { id: id, name: item } }, () =>
				this.props.addItem(this.state.newItem)
			);
	}

	render() {
		const id = this.props.idName;
		const divName = "add" + id;
		return (
			<div className="addItemDiv">
				<h4>Add {id}</h4>
				<form ref={this.form} onSubmit={this.handleSubmit.bind(this)}>
					<div id={divName}>
						<label>Name</label>
						{/* <br /> */}
						<input
							type="text"
							className="listItem"
							ref={this.keyId}
							required
							placeholder={`...${id}`}
						/>
					</div>
					<br />
					<input type="submit" value="Submit" className="submitItem" />
				</form>
			</div>
		);
	}
}

export default AddItem;
