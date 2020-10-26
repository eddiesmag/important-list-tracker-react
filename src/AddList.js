import React, { Component } from "react";

class AddList extends Component {
	constructor() {
		super();
		this.state = {
			listName: "",
		};
		this.name = React.createRef();
	}

	handleSubmit(e) {
		e.preventDefault();
		const name = this.name.current.value;

		if (name === "") alert("List Name required!");
		else
			this.setState({ listName: name }, () => {
				this.props.addList(this.state.listName);
				this.name.current.value = "";
			});
	}

	render() {
		return (
			<div id="addListDiv">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div id="addList">
						<label>
							<strong style={{fontSize: 14}}>What will be on your next list?</strong><br/>
							<input
								type="text"
								ref={this.name}
								id="newID"
								placeholder="List Name"
								required
							></input>
						</label>
					</div>
					<br />
					<input type="submit" value="Create List" className="createList" />
				</form>
			</div>
		);
	}
}

export default AddList;
