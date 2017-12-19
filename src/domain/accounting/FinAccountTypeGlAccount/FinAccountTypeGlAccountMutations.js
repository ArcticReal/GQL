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
import {FinAccountTypeGlAccountInputType} from '../../accounting/FinAccountTypeGlAccount/FinAccountTypeGlAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFinAccountTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccountTypeGlAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccount/finAccountTypeGlAccounts/add?`, null, req);
  }
};
export {createFinAccountTypeGlAccount};


const deleteFinAccountTypeGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountTypeGlAccountByIdUpdated method',
  args:{finAccountTypeGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccount/finAccountTypeGlAccounts/${args.finAccountTypeGlAccountId}?`, null, req);
  }
};
export {deleteFinAccountTypeGlAccountByIdUpdated};


const updateFinAccountTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccountTypeGlAccount method',
  args:{finAccountTypeGlAccountToBeUpdated: {type: FinAccountTypeGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccount/finAccountTypeGlAccounts/${args.nullVal}?`, args.finAccountTypeGlAccountToBeUpdated, req);
  }
};
export {updateFinAccountTypeGlAccount};
