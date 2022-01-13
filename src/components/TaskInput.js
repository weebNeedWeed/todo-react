import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

const styles = {
	paper: {
		display: "flex",
		justifyContent: "space-between",
		border: "1px solid rgba(0,0,0,0.5)",
		marginBottom: "10px",
	},
	input: {
		width: "100%",
		padding: "5px",
	},
};

class TaskInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			taskName: "",
		};
	}

	handleSubmit = (event) => {
		event.preventDefault();

		this.props.addTask(this.state.taskName);
	};

	handleChange = (event) => {
		this.setState({ taskName: event.target.value });
	};

	render() {
		const { classes } = this.props;

		return (
			<Paper
				className={classes.paper}
				component="form"
				onSubmit={this.handleSubmit}
			>
				<InputBase
					placeholder="Add new task"
					className={classes.input}
					value={this.state.taskName}
					onChange={this.handleChange}
				/>
				<IconButton type="submit">
					<AddIcon />
				</IconButton>
			</Paper>
		);
	}
}

TaskInput.propTypes = {
	classes: PropTypes.object,
	addTask: PropTypes.func,
};

export default withStyles(styles)(TaskInput);
