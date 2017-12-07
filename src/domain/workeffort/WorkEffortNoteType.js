
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';


const WorkEffortNoteType = new GraphQLObjectType({
  name: 'WorkEffortNoteType',
  description: 'Type for WorkEffortNote in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortNote, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortNote.workEffortId}`)
    },
    internalNote: {type: GraphQLBoolean},
    noteId: {type: GraphQLString}
  })
});

export {WorkEffortNoteType};
    