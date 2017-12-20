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
import {FinAccountTransTypeInputType} from '../../accounting/FinAccountTransType/FinAccountTransTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createFinAccountTransType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createFinAccountTransType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTransTypes/add?`, null, req);
  }
};
export {createFinAccountTransType};


const updateFinAccountTransType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateFinAccountTransType method',
  args:{finAccountTransTypeToBeUpdated: {type: FinAccountTransTypeInputType},finAccountTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTransTypes/${args.finAccountTransTypeId}?`, args.finAccountTransTypeToBeUpdated, req);
  }
};
export {updateFinAccountTransType};


const deleteFinAccountTransTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteFinAccountTransTypeByIdUpdated method',
  args:{finAccountTransTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTransTypes/${args.finAccountTransTypeId}?`, null, req);
  }
};
export {deleteFinAccountTransTypeByIdUpdated};
