
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


const WorkEffortTransBoxType = new GraphQLObjectType({
  name: 'WorkEffortTransBoxType',
  description: 'Type for WorkEffortTransBox in workeffort',

  fields: () => ({
    toActivityId: {type: GraphQLString},
    processWorkEffort: {
      type: WorkEffortType,
      args : {processWorkEffortId: {type: GraphQLString}},
      resolve: (workEffortTransBox, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortTransBox.processWorkEffortId}`)
    },
    transitionId: {type: GraphQLString}
  })
});

export {WorkEffortTransBoxType};
    




const WorkEffortTransBoxInputType = new GraphQLInputObjectType({
  name: 'WorkEffortTransBoxInputType',
  description: 'input type for WorkEffortTransBox',

  fields: () => ({
    processWorkEffortId: {type: GraphQLString},
    toActivityId: {type: GraphQLString},
    transitionId: {type: GraphQLString}
  })
});

export {WorkEffortTransBoxInputType};
    