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
import {OrderRequirementCommitmentInputType} from '../../order/OrderRequirementCommitment/OrderRequirementCommitmentInputType.js';
import {OrderRequirementCommitmentResponseType} from '../../order/OrderRequirementCommitment/OrderRequirementCommitmentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderRequirementCommitment = {
  type: OrderRequirementCommitmentResponseType,
  description: 'mutation for ofbiz createOrderRequirementCommitment method',
  args:{orderRequirementCommitmentToBeAdded: {type: OrderRequirementCommitmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/orderRequirementCommitments/add?`, args.orderRequirementCommitmentToBeAdded, req);
  }
};
export {createOrderRequirementCommitment};


const updateOrderRequirementCommitment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderRequirementCommitment method',
  args:{orderRequirementCommitmentToBeUpdated: {type: OrderRequirementCommitmentInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/orderRequirementCommitments/${args.orderItemSeqId}?`, args.orderRequirementCommitmentToBeUpdated, req);
  }
};
export {updateOrderRequirementCommitment};


const deleteOrderRequirementCommitmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderRequirementCommitmentByIdUpdated method',
  args:{orderRequirementCommitmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/orderRequirementCommitments/${args.orderRequirementCommitmentId}?`, null, req);
  }
};
export {deleteOrderRequirementCommitmentByIdUpdated};
