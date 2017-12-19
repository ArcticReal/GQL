
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

import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {OrderItemType} from '../../order/OrderItem/OrderItemType.js';


const OrderRequirementCommitmentType = new GraphQLObjectType({
  name: 'OrderRequirementCommitmentType',
  description: 'Type for OrderRequirementCommitment in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderRequirementCommitment, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${orderRequirementCommitment.orderId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (orderRequirementCommitment, args, {loaders}) => loaders.ofbiz.load(`order/requirements/find?requirementId=${orderRequirementCommitment.requirementId}`)
    }
  })
});

export {OrderRequirementCommitmentType};
    