//import { useState } from "react";
import React from "react";
import { useQuery, useMutation } from "@apollo/client";
//import { useQuery, gql } from "@apollo/client";
import { GET_PROJECTS_QUERY, ADD_TASK_MUTATION, GET_TASKS_QUERY } from './queries'; // Import queries
import { compose, flowRight } from 'lodash'; // Import compose and flowRight


const { loading, error, data } = useQuery(GET_PROJECTS_QUERY);
const [addTask] = useMutation(ADD_TASK_MUTATION); // Use the addTask mutation


const handleChange = (e) => {
  const newInputs = {
    ...inputs
  };
  if (e.target.name === "weight") newInputs[e.target.name] = parseInt(e.target.value)
  else newInputs[e.target.name] = e.target.value
  setInputs(newInputs)
}


function AddTask(props) {
  const [inputs, setInputs] = useState({
    title: "",
    weight: 1,
    description: "",
    projectId: ""
  });


function displayProjects() {
  if (loading) {
    return <option>Loading projects...</option>;
  }

  if (error) {
    return <option>Error fetching projects...</option>;
  }

  return projectsData.projects.map(project => (
    <option key={project.id} value={project.id}>
      {project.title}
    </option>
  ));
}

const submitForm = (e) => {
  e.preventDefault();
  addTask({
    variables: {
      title: inputs.title,
      weight: inputs.weight,
      description: inputs.description,
      projectId: inputs.projectId
    },
    refetchQueries: [
      { query: GET_TASKS_QUERY }
    ]
  });
}

  return (
    <form className="task" id="add-task" onSubmit={submitForm}>
      <div className="field">
        <label>Task title:</label>
        <input 
          type="text"
          name="title"
          onChange={handleChange}
          value={inputs.title}
          required
        />
      </div>

      <div className="field">
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          onChange={handleChange}  
          value={inputs.weight}
          required
        />
      </div>

      <div className="field">
        <label>Description:</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={inputs.description}
          required
        />
      </div>

      <div className="field">
        <label>Project:</label>
        <select
          name="projectId"
          onChange={handleChange}
          value={inputs.projectId}
          required
        >
          <option value="" selected="selected" disabled="disabled">
            Select project
          </option>
          {displayProjects()}
        </select>
      </div>

      <button>+</button>
    </form>
  );
}

export default compose(
  flowRight(
    graphql(GET_PROJECTS_QUERY, { name: 'getProjectsQuery' }),
    graphql(ADD_TASK_MUTATION, { name: 'addTaskMutation' })
  )
)(AddTask);
