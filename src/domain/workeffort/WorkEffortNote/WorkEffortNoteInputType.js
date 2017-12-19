import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

const WorkEffortNoteInputType = new GraphQLInputObjectType({
  name: 'WorkEffortNoteInputType',
  description: 'input type for WorkEffortNote',

  fields: () => ({
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortNoteInputType};
    