
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

import {WorkEffortType} from '../../workeffort/WorkEffort/WorkEffortType.js';


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
    