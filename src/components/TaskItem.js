import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const styles = {
	paper: {
		padding: "5px",
		display: "flex",
		justifyContent: "space-between",
	},
	deleteButton: {
		marginTop: "auto",
		marginBottom: "auto",
		color: "red",
		cursor: "pointer",
	},
	label: {
		textDecoration: (props) => (props.done ? "line-through" : "none"),
	},
};

class TaskItem extends Component {
	render() {
		const { classes } = this.props;

		return (
			<Paper variant="outlined" className={classes.paper}>
				<FormControlLabel
					control={
						<Checkbox
							checked={this.props.done}
							onChange={this.props.toggleTaskStatus}
						/>
					}
					label={this.props.name}
					className={classes.label}
				/>
				<DeleteIcon
					className={classes.deleteButton}
					onClick={this.props.deleteTask}
				/>
			</Paper>
		);
	}
}

TaskItem.propTypes = {
	classes: PropTypes.object,
	done: PropTypes.bool,
	name: PropTypes.string,
	toggleTaskStatus: PropTypes.func,
	deleteTask: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
