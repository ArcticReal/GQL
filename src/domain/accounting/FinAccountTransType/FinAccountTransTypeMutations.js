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
import {FinAccountTransTypeResponseType} from '../../accounting/FinAccountTransType/FinAccountTransTypeResponseType.js';
import {FinAccountTransTypeInputType} from '../../accounting/FinAccountTransType/FinAccountTransTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountTransType = {
  type: FinAccountTransTypeResponseType,
  description: 'mutation for ofbiz createFinAccountTransType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTransTypes/add?`, null, req);
  }
};
export {createFinAccountTransType};


const updateFinAccountTransType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountTransType method',
  args:{finAccountTransTypeToBeUpdated: {type: FinAccountTransTypeInputType},finAccountTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTransTypes/${args.finAccountTransTypeId}?`, args.finAccountTransTypeToBeUpdated, req);
  }
};
export {updateFinAccountTransType};


const deleteFinAccountTransTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTransTypeByIdUpdated method',
  args:{finAccountTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTransTypes/${args.finAccountTransTypeId}?`, null, req);
  }
};
export {deleteFinAccountTransTypeByIdUpdated};
