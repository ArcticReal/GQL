
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
import {DeliverableType} from '../workeffort/DeliverableType.js';


const WorkEffortDeliverableProdType = new GraphQLObjectType({
  name: 'WorkEffortDeliverableProdType',
  description: 'Type for WorkEffortDeliverableProd in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortDeliverableProd, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortDeliverableProd.workEffortId}`)
    },
    deliverable: {
      type: DeliverableType,
      args : {deliverableId: {type: GraphQLString}},
      resolve: (workEffortDeliverableProd, args, {loaders}) => loaders.ofbiz.load(`deliverables/find?deliverableId=${workEffortDeliverableProd.deliverableId}`)
    }
  })
});

export {WorkEffortDeliverableProdType};
    