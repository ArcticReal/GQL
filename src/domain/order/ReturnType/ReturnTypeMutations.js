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
import {ReturnTypeResponseType} from '../../order/ReturnType/ReturnTypeResponseType.js';
import {ReturnTypeInputType} from '../../order/ReturnType/ReturnTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnType = {
  type: ReturnTypeResponseType,
  description: 'mutation for ofbiz createReturnType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnTypes/add?`, null, req);
  }
};
export {createReturnType};


const updateReturnType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnType method',
  args:{returnTypeToBeUpdated: {type: ReturnTypeInputType},returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnTypes/${args.returnTypeId}?`, args.returnTypeToBeUpdated, req);
  }
};
export {updateReturnType};


const deleteReturnTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnTypeByIdUpdated method',
  args:{returnTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnTypes/${args.returnTypeId}?`, null, req);
  }
};
export {deleteReturnTypeByIdUpdated};
