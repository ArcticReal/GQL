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
import {ReturnTypeInputType} from '../../order/ReturnType/ReturnTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createReturnType method',
  args:{returnTypeToBeAdded: {type: ReturnTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnTypes/add?`, args.returnTypeToBeAdded, req);
  }
};
export {createReturnType};


const updateReturnType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateReturnType method',
  args:{returnTypeToBeUpdated: {type: ReturnTypeInputType},returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnTypes/${args.returnTypeId}?`, args.returnTypeToBeUpdated, req);
  }
};
export {updateReturnType};


const deleteReturnTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteReturnTypeByIdUpdated method',
  args:{returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnTypes/${args.returnTypeId}?`, null, req);
  }
};
export {deleteReturnTypeByIdUpdated};
