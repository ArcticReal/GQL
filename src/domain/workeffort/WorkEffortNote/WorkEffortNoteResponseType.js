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

const WorkEffortNoteResponseType = new GraphQLObjectType({
  name: 'WorkEffortNoteResponseType',
  description: 'response type for WorkEffortNote',

  fields: () => ({
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortNoteResponseType};
    