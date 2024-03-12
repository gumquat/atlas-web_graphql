import { useState } from "react";
//import gql from 'apollo-boost';
import { graphql } from 'react-apollo';
import { GET_TASKS_QUERY } from './queries'; // Import the query from queries.js

//components
import TaskDetails from './TaskDetails';

function TaskList(props) {
  const [state, setState] = useState({
    selected: null
  });

  function displayTasks() {
    var data = props.data;
    if(data.loading) {
      return <div>Loading tasks...</div>;
    } else {
      return data.tasks.map(task => {
        return (
          <li key={task.id} onClick={(e) => setState({ selected: task.id })}>
            {task.title}
          </li>
        );
      });
    }
  }

  return (
    <div>
      <ul id="task-list">{displayTasks()}</ul>
      <TaskDetails taskId={state.selected} />
    </div>
  );
}

/* Define the GraphQL query
const getTasksQuery = gql`
  {
    tasks {
      id
      title
    }
  }
`;
*/

export default graphql(GET_TASKS_QUERY)(TaskList);