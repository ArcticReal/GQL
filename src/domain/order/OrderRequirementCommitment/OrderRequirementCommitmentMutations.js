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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderRequirementCommitment = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderRequirementCommitment method',
  args:{orderRequirementCommitmentToBeAdded: {type: OrderRequirementCommitmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/requirement/orderRequirementCommitments/add?`, args.orderRequirementCommitmentToBeAdded, req);
  }
};
export {createOrderRequirementCommitment};


const updateOrderRequirementCommitment = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderRequirementCommitment method',
  args:{orderRequirementCommitmentToBeUpdated: {type: OrderRequirementCommitmentInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/requirement/orderRequirementCommitments/${args.orderItemSeqId}?`, args.orderRequirementCommitmentToBeUpdated, req);
  }
};
export {updateOrderRequirementCommitment};


const deleteOrderRequirementCommitmentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderRequirementCommitmentByIdUpdated method',
  args:{orderRequirementCommitmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/requirement/orderRequirementCommitments/${args.orderRequirementCommitmentId}?`, null, req);
  }
};
export {deleteOrderRequirementCommitmentByIdUpdated};
