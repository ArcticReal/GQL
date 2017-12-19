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
import {FinAccountTypeInputType} from '../../accounting/FinAccountType/FinAccountTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFinAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccountType method',
  args:{finAccountTypeToBeAdded: {type: FinAccountTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTypes/add?`, args.finAccountTypeToBeAdded, req);
  }
};
export {createFinAccountType};


const updateFinAccountType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountType method',
  args:{finAccountTypeToBeUpdated: {type: FinAccountTypeInputType},finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTypes/${args.finAccountTypeId}?`, args.finAccountTypeToBeUpdated, req);
  }
};
export {updateFinAccountType};


const deleteFinAccountTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTypeByIdUpdated method',
  args:{finAccountTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTypes/${args.finAccountTypeId}?`, null, req);
  }
};
export {deleteFinAccountTypeByIdUpdated};
