import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT_MUTATION, GET_PROJECTS_QUERY } from './queries';


function AddProject(props) {

  const [inputsProject, setInputsProject] = useState({
    title: '',
    weight: 1,
    description: ''
  });

  const [addProject] = useMutation(ADD_PROJECT_MUTATION);

  const handleChange = (e) => {
    const newInputsProject = {
      ...inputsProject
    };
    if (e.target.name === "weight") newInputsProject[e.target.name] = parseInt(e.target.value)
    else newInputsProject[e.target.name] = e.target.value
    setInputsProject(newInputsProject)
  }

  const submitForm1 = (e) => {
    e.preventDefault();
    addProject({
      variables: {
        title: inputsProject.title,
        weight: inputsProject.weight,
        description: inputsProject.description
      },
      refetchQueries: [
        { query: GET_PROJECTS_QUERY }
      ]
    });
  }

    return (
    <form className="project" id="add-project" onSubmit={submitForm1}>
      <div className="field">
        <label>Project title:</label>
        <input
          type="text"
          name="title"
          onChange={handleChange}
          value={inputsProject.title}
        />
      </div>
      <div className="field">
        <label>Weight:</label>
        <input
          type="number"
          name="weight"
          onChange={handleChange}
          value={inputsProject.weight}
        />
      </div>
      <div className="field">
        <label>Description:</label>
        <textarea
          name="description"
          onChange={handleChange}
          value={inputsProject.description}
        />
      </div>
      <button type="submit">+</button>
    </form>
  )};

  export default AddProject;
