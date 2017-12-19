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
import {BillingAccountInputType} from '../../accounting/BillingAccount/BillingAccountInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBillingAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBillingAccount method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/billingAccounts/add?`, null, req);
  }
};
export {createBillingAccount};


const updateBillingAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBillingAccount method',
  args:{billingAccountToBeUpdated: {type: BillingAccountInputType},billingAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/billingAccounts/${args.billingAccountId}?`, args.billingAccountToBeUpdated, req);
  }
};
export {updateBillingAccount};


const deleteBillingAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBillingAccountByIdUpdated method',
  args:{billingAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/billingAccounts/${args.billingAccountId}?`, null, req);
  }
};
export {deleteBillingAccountByIdUpdated};
