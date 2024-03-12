import gql from 'graphql-tag';

const ADD_TASK_MUTATION = gql`
  mutation CreateTask($title: String!, $weight: Int!, $description: String!, $projectId: ID!) {
    createTask(input: { title: $title, weight: $weight, description: $description, projectId: $projectId }) {
      id
      title
      weight
      description
    }
  }
`;

const GET_PROJECTS_QUERY = gql`
  query {
    projects {
      id
      title
    }
  }
`;

const GET_TASKS_QUERY = gql`
  {
    tasks {
      id
      title
    }
  }
`;

export { GET_PROJECTS_QUERY, GET_TASKS_QUERY, ADD_TASK_MUTATION, ADD_PROJECT_MUTATION };