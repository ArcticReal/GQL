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
import {FinAccountInputType} from '../../accounting/FinAccount/FinAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createFinAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createFinAccount method',
  args:{finAccountToBeAdded: {type: FinAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/finAccounts/add?`, args.finAccountToBeAdded, req);
  }
};
export {createFinAccount};


const updateFinAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateFinAccount method',
  args:{finAccountToBeUpdated: {type: FinAccountInputType},finAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/finAccounts/${args.finAccountId}?`, args.finAccountToBeUpdated, req);
  }
};
export {updateFinAccount};


const deleteFinAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteFinAccountByIdUpdated method',
  args:{finAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/finAccounts/${args.finAccountId}?`, null, req);
  }
};
export {deleteFinAccountByIdUpdated};
