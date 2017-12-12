
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
import {DeliverableType} from '../workeffort/Deliverable.js';


const WorkEffortDeliverableProdType = new GraphQLObjectType({
  name: 'WorkEffortDeliverableProdType',
  description: 'Type for WorkEffortDeliverableProd in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortDeliverableProd, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortDeliverableProd.workEffortId}`)
    },
    deliverable: {
      type: DeliverableType,
      args : {deliverableId: {type: GraphQLString}},
      resolve: (workEffortDeliverableProd, args, {loaders}) => loaders.ofbiz.load(`workeffort/deliverables/find?deliverableId=${workEffortDeliverableProd.deliverableId}`)
    }
  })
});

export {WorkEffortDeliverableProdType};
    




const WorkEffortDeliverableProdInputType = new GraphQLInputObjectType({
  name: 'WorkEffortDeliverableProdInputType',
  description: 'input type for WorkEffortDeliverableProd in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    deliverableId: {type: GraphQLString}
  })
});

export {WorkEffortDeliverableProdInputType};
    