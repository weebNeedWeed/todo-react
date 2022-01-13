import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import EditIcon from "@material-ui/icons/Edit";

const styles = {
	paper: {
		padding: "5px",
		display: "flex",
		justifyContent: "space-between",
	},
	deleteButton: {
		color: "red",
		cursor: "pointer",
	},
	editButton: {
		color: "black",
		cursor: "pointer",
	},
	actionWrapper: {
		display: "flex",
		alignItems: "center",
	},
	label: { textDecoration: (props) => (props.done ? "line-through" : "none") },
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
				<div className={classes.actionWrapper}>
					<EditIcon
						className={classes.editButton}
						onClick={this.props.editTask}
					/>
					<DeleteIcon
						className={classes.deleteButton}
						onClick={this.props.deleteTask}
					/>
				</div>
			</Paper>
		);
	}
}

TaskItem.propTypes = {
	classes: PropTypes.object,
	done: PropTypes.bool,
	name: PropTypes.string,
	deleteTask: PropTypes.func,
	toggleTaskStatus: PropTypes.func,
	editTask: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
