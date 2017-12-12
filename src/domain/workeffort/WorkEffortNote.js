
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';


const WorkEffortNoteType = new GraphQLObjectType({
  name: 'WorkEffortNoteType',
  description: 'Type for WorkEffortNote in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortNote, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortNote.workEffortId}`)
    },
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString}
  })
});

export {WorkEffortNoteType};
    




const WorkEffortNoteInputType = new GraphQLInputObjectType({
  name: 'WorkEffortNoteInputType',
  description: 'input type for WorkEffortNote in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString}
  })
});

export {WorkEffortNoteInputType};
    