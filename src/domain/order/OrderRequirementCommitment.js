
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

import {RequirementType} from '../order/Requirement.js';
import {OrderItemType} from '../order/OrderItem.js';


const OrderRequirementCommitmentType = new GraphQLObjectType({
  name: 'OrderRequirementCommitmentType',
  description: 'Type for OrderRequirementCommitment in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderRequirementCommitment, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${orderRequirementCommitment.orderId}`)
    },
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (orderRequirementCommitment, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${orderRequirementCommitment.requirementId}`)
    }
  })
});

export {OrderRequirementCommitmentType};
    




const OrderRequirementCommitmentInputType = new GraphQLInputObjectType({
  name: 'OrderRequirementCommitmentInputType',
  description: 'input type for OrderRequirementCommitment in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    orderId: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {OrderRequirementCommitmentInputType};
    