import gql from 'graphql-tag';
/**
const AddProject_Mutation = gql`
  mutation CreateProject($title: String!, $weight: Int!, $description: String!) {
    createProject(input: { title: $title, weight: $weight, description: $description }) {
      id
      title
      weight
      description
    }
  }
`;
*/
//export { AddProject_Mutation };

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

export { GET_PROJECTS_QUERY, GET_TASKS_QUERY };