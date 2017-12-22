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
import {ReturnAdjustmentTypeInputType} from '../../order/ReturnAdjustmentType/ReturnAdjustmentTypeInputType.js';
import {ReturnAdjustmentTypeResponseType} from '../../order/ReturnAdjustmentType/ReturnAdjustmentTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnAdjustmentType = {
  type: ReturnAdjustmentTypeResponseType,
  description: 'mutation for ofbiz createReturnAdjustmentType method',
  args:{returnAdjustmentTypeToBeAdded: {type: ReturnAdjustmentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnAdjustment/returnAdjustmentTypes/add?`, args.returnAdjustmentTypeToBeAdded, req);
  }
};
export {createReturnAdjustmentType};


const updateReturnAdjustmentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnAdjustmentType method',
  args:{returnAdjustmentTypeToBeUpdated: {type: ReturnAdjustmentTypeInputType},returnAdjustmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnAdjustment/returnAdjustmentTypes/${args.returnAdjustmentTypeId}?`, args.returnAdjustmentTypeToBeUpdated, req);
  }
};
export {updateReturnAdjustmentType};


const deleteReturnAdjustmentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnAdjustmentTypeByIdUpdated method',
  args:{returnAdjustmentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnAdjustment/returnAdjustmentTypes/${args.returnAdjustmentTypeId}?`, null, req);
  }
};
export {deleteReturnAdjustmentTypeByIdUpdated};
