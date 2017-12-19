
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

import {WorkEffortDeliverableProdType} from '../../workeffort/WorkEffortDeliverableProd/WorkEffortDeliverableProdType.js';
import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {DeliverableTypeType} from '../../workeffort/DeliverableType/DeliverableTypeType.js';


const DeliverableType = new GraphQLObjectType({
  name: 'DeliverableType',
  description: 'Type for Deliverable in workeffort',

  fields: () => ({
    deliverableName: {type: GraphQLString},
    deliverableType: {
      type: DeliverableTypeType,
      args : {deliverableTypeId: {type: GraphQLString}},
      resolve: (deliverable, args, {loaders}) => loaders.ofbiz.load(`workeffort/deliverable/deliverableTypes/find?deliverableTypeId=${deliverable.deliverableTypeId}`)
    },
    description: {type: GraphQLString},
    deliverableId: {type: GraphQLString},
    workEffortDeliverableProds: {
      type: new GraphQLList(WorkEffortDeliverableProdType),
      args : {},
      resolve: (deliverable, args, {loaders}) => loaders.ofbizArray.load(`workeffort/deliverable/workEffortDeliverableProds/find?deliverableId=${deliverable.deliverableId}`)
    },
    requirements: {
      type: new GraphQLList(RequirementType),
      args : {},
      resolve: (deliverable, args, {loaders}) => loaders.ofbizArray.load(`order/requirements/find?deliverableId=${deliverable.deliverableId}`)
    }
  })
});

export {DeliverableType};
    