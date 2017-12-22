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
import {BillingAccountResponseType} from '../../accounting/BillingAccount/BillingAccountResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createBillingAccount = {
  type: BillingAccountResponseType,
  description: 'mutation for ofbiz createBillingAccount method',
  args:{billingAccountToBeAdded: {type: BillingAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/billingAccounts/add?`, args.billingAccountToBeAdded, req);
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
