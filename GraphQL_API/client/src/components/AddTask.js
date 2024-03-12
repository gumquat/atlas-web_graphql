//import { useState } from "react";
import React from "react";
import { useQuery } from "@apollo/client";
//import { useQuery, gql } from "@apollo/client";
import { GET_PROJECTS_QUERY } from './queries'; // Import the query from queries.js

/** 
const getProjectsQuery = gql`
  query {
    projects {
      id
      title
    }
  }
`;

const { loading, error, data } = useQuery(getProjectsQuery);
*/
const { loading, error, data } = useQuery(GET_PROJECTS_QUERY);

const handleChange = (e) => {
  const newInputs = {
    ...inputs
  };
  if (e.target.name === "weight") newInputs[e.target.name] = parseInt(e.target.value)
  else newInputs[e.target.name] = e.target.value
  setInputs(newInputs)
}

/**FUNC */
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

  return data.projects.map(project => (
    <option key={project.id} value={project.id}>
      {project.title}
    </option>
  ));
}

  return (
    <form className="task" id="add-task" /*onSubmit={...}*/>
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

export default AddTask;
