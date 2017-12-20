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
import {ReturnItemTypeInputType} from '../../order/ReturnItemType/ReturnItemTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createReturnItemType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItem/returnItemTypes/add?`, null, req);
  }
};
export {createReturnItemType};


const updateReturnItemType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateReturnItemType method',
  args:{returnItemTypeToBeUpdated: {type: ReturnItemTypeInputType},returnItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnItem/returnItemTypes/${args.returnItemTypeId}?`, args.returnItemTypeToBeUpdated, req);
  }
};
export {updateReturnItemType};


const deleteReturnItemTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteReturnItemTypeByIdUpdated method',
  args:{returnItemTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnItem/returnItemTypes/${args.returnItemTypeId}?`, null, req);
  }
};
export {deleteReturnItemTypeByIdUpdated};
