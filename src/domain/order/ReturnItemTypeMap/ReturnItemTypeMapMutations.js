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
import {ReturnItemTypeMapInputType} from '../../order/ReturnItemTypeMap/ReturnItemTypeMapInputType.js';
import {ReturnItemTypeMapResponseType} from '../../order/ReturnItemTypeMap/ReturnItemTypeMapResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnItemTypeMap = {
  type: ReturnItemTypeMapResponseType,
  description: 'mutation for ofbiz createReturnItemTypeMap method',
  args:{returnItemTypeMapToBeAdded: {type: ReturnItemTypeMapInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItem/returnItemTypeMaps/add?`, args.returnItemTypeMapToBeAdded, req);
  }
};
export {createReturnItemTypeMap};


const updateReturnItemTypeMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnItemTypeMap method',
  args:{returnItemTypeMapToBeUpdated: {type: ReturnItemTypeMapInputType},returnItemMapKey: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnItem/returnItemTypeMaps/${args.returnItemMapKey}?`, args.returnItemTypeMapToBeUpdated, req);
  }
};
export {updateReturnItemTypeMap};


const deleteReturnItemTypeMapByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnItemTypeMapByIdUpdated method',
  args:{returnItemTypeMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnItem/returnItemTypeMaps/${args.returnItemTypeMapId}?`, null, req);
  }
};
export {deleteReturnItemTypeMapByIdUpdated};
