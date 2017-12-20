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
import {CheckAccountInputType} from '../../accounting/CheckAccount/CheckAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createCheckAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz createCheckAccount method',
  args:{checkAccountToBeAdded: {type: CheckAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/checkAccounts/add?`, args.checkAccountToBeAdded, req);
  }
};
export {createCheckAccount};


const deleteCheckAccountByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteCheckAccountByIdUpdated method',
  args:{checkAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/checkAccounts/${args.checkAccountId}?`, null, req);
  }
};
export {deleteCheckAccountByIdUpdated};


const updateCheckAccount = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateCheckAccount method',
  args:{checkAccountToBeUpdated: {type: CheckAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/checkAccounts/${args.nullVal}?`, args.checkAccountToBeUpdated, req);
  }
};
export {updateCheckAccount};
