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
import {ReturnAdjustmentInputType} from '../../order/ReturnAdjustment/ReturnAdjustmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createReturnAdjustment = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReturnAdjustment method',
  args:{returnAdjustmentToBeAdded: {type: ReturnAdjustmentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnAdjustments/add?`, args.returnAdjustmentToBeAdded, req);
  }
};
export {createReturnAdjustment};


const updateReturnAdjustment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnAdjustment method',
  args:{returnAdjustmentToBeUpdated: {type: ReturnAdjustmentInputType},returnAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnAdjustments/${args.returnAdjustmentId}?`, args.returnAdjustmentToBeUpdated, req);
  }
};
export {updateReturnAdjustment};


const deleteReturnAdjustmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnAdjustmentByIdUpdated method',
  args:{returnAdjustmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnAdjustments/${args.returnAdjustmentId}?`, null, req);
  }
};
export {deleteReturnAdjustmentByIdUpdated};
