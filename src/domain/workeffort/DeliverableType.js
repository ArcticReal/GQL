
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortDeliverableProdType} from '../workeffort/WorkEffortDeliverableProdType.js';
import {RequirementType} from '../order/RequirementType.js';
import {DeliverableTypeType} from '../workeffort/DeliverableTypeType.js';


const DeliverableType = new GraphQLObjectType({
  name: 'DeliverableType',
  description: 'Type for Deliverable in workeffort',

  fields: () => ({
    deliverableName: {type: GraphQLString},
    deliverableType: {
      type: DeliverableTypeType,
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (deliverable, args, {loaders}) => loaders.ofbiz.load(`deliverableTypes/find?deliverableTypeId=${deliverable.deliverableTypeId}`)
    },
    description: {type: GraphQLString},
    deliverableId: {type: GraphQLString},
    workEffortDeliverableProd: {
      type: new GraphQLList(WorkEffortDeliverableProdType),
      args : {deliverableId: {type: GraphQLString}},
      resolve: (deliverable, args, {loaders}) => loaders.ofbizArray.load(`workEffortDeliverableProds/find?deliverableId=${deliverable.deliverableId}`)
    },
    requirement: {
      type: new GraphQLList(RequirementType),
      args : {deliverableId: {type: GraphQLString}},
      resolve: (deliverable, args, {loaders}) => loaders.ofbizArray.load(`requirements/find?deliverableId=${deliverable.deliverableId}`)
    }
  })
});

export {DeliverableType};
    