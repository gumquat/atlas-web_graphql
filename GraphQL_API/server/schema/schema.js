// Import the required modules
const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema, GraphQLID } = require('graphql');
const lodash = require('lodash');
const Project = require('./models/project');
const Task = require('./models/task');

// Define the TaskType GraphQLObjectType
const TaskType = new GraphQLObjectType({
    // Name of the type
    name: 'Task',
    // Fields of the type
    fields: {
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString },
        projectId: { type: GraphQLString },
        project: {
            type: ProjectType,
            resolve(parent, args) {
                //return lodash.find(projects, { id: parent.projectId });
                return Project.findById(parent.projectId);
            }
        }
    }
});

// Define the ProjectType GraphQLObjectType
const ProjectType = new GraphQLObjectType({
    name: 'Project',
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        weight: { type: GraphQLInt },
        description: { type: GraphQLString },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, args) {
                //return tasks.filter(task => task.projectId === parent.id);
                return Task.find({ projectId: parent.id });
            }
        }
    }
});


// Define the RootQuery GraphQLObjectType
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        task: {
            type: TaskType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args) {
                //const task = lodash.find(tasks, { id: args.id.toString() });
                //return task;
                return Task.findById(args.id);
            }
        },
        tasks: {
            type: new GraphQLList(TaskType),
            resolve() {
                //return tasks;
                return Task.find({});
            }
        },
        projects: {
            type: new GraphQLList(ProjectType),
            resolve() {
                //return projects;
                return Project.find({});
            }
        }
    }
});

// Define the Mutation GraphQLObjectType
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addProject: {
            type: ProjectType,
            args: {
                title: { type: new GraphQLNonNull(GraphQLString) },
                weight: { type: new GraphQLNonNull(GraphQLInt) },
                description: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const newProject = new Project({
                    title: args.title,
                    weight: args.weight,
                    description: args.description
                });
                return newProject.save();
            }
        }
    }
});

/*
// Array of tasks
const tasks = [
    {
        id: '1',
        title: 'Create your first webpage',
        weight: 1,
        description: 'Create your first HTML file 0-index.html with: -Add the doctype on the first line (without any comment) -After the doctype, open and close a html tag Open your file in your browser (the page should be blank)',
        projectID: '1'
    },
    {
        id: '2',
        title: 'Structure your webpage',
        weight: 1,
        description: 'Copy the content of 0-index.html into 1-index.html Create the head and body sections inside the html tag, create the head and body tags (empty) in this order',
        projectID: '1'
    }
];

// Array of projects
const projects = [
    { 
        id: '1',
        title: 'Advanced HTML',
        weight: 1,
        description: 'Welcome to the Web Stack specialization...',
        id: '2',
        title: 'Bootstrap',
        weight: 1,
        description: 'Bootstrap is a free and open-source CSS framework...'
    },
    {
        id: '2',
        title: 'bootstrap',
        weight: '1',
        description: ' ’Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS and JavaScript design templates for typography, forms, buttons, navigation, and other interface components.’'
    }
];
*/

// Export the TaskType, RootQueryType, schema, and tasks
//module.exports = { TaskType, RootQueryType, schema, tasks };
module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});