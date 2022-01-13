import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";

const styles = {
	typography: {
		textAlign: "center",
		fontWeight: "bold",
		textTransform: "uppercase",
		marginTop: "30vh",
	},
};

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { listTask: [] };
	}

	componentDidMount() {
		let listTask = [];

		if (localStorage.getItem("todos")) {
			listTask = JSON.parse(localStorage.getItem("todos"));
		}

		this.setState({
			listTask,
		});
	}

	saveChange() {
		localStorage.setItem("todos", JSON.stringify(this.state.listTask));
	}

	addTask = (taskName) => {
		let listTaskClone = [...this.state.listTask];
		listTaskClone.push({
			name: taskName,
			done: false,
		});

		this.setState({ listTask: listTaskClone }, this.saveChange);
	};

	deleteTask = (index) => {
		let listTaskClone = [...this.state.listTask];
		listTaskClone = listTaskClone.filter(
			(elm, taskIndex) => taskIndex !== index,
		);

		this.setState({ listTask: listTaskClone }, this.saveChange);
	};

	toggleTaskStatus = (index) => {
		let listTaskClone = [...this.state.listTask];
		listTaskClone[index].done = !listTaskClone[index].done;

		this.setState({ listTask: listTaskClone }, this.saveChange);
	};

	editTask = (index) => {
		const text = prompt("Enter text!");
		if (typeof text === "undefined" || text === "") {
			return;
		}

		let listTaskClone = [...this.state.listTask];
		listTaskClone[index].name = text;

		this.setState({ listTask: listTaskClone }, this.saveChange);
	};

	render() {
		const { classes } = this.props;

		return (
			<Container maxWidth="sm">
				<Typography variant="h3" className={classes.typography}>
					{`todos - ${this.state.listTask.length}`}
				</Typography>

				<TaskInput addTask={this.addTask} />

				{this.state.listTask.map((elm, index) => (
					<TaskItem
						key={index}
						name={elm.name}
						done={elm.done}
						deleteTask={() => this.deleteTask(index)}
						toggleTaskStatus={() => this.toggleTaskStatus(index)}
						editTask={() => this.editTask(index)}
					/>
				))}
			</Container>
		);
	}
}

App.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles)(App);
