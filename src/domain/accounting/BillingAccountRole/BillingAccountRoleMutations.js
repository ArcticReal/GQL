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
import {BillingAccountRoleInputType} from '../../accounting/BillingAccountRole/BillingAccountRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createBillingAccountRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz createBillingAccountRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/billingAccount/billingAccountRoles/add?`, null, req);
  }
};
export {createBillingAccountRole};


const deleteBillingAccountRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteBillingAccountRoleByIdUpdated method',
  args:{billingAccountRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/billingAccount/billingAccountRoles/${args.billingAccountRoleId}?`, null, req);
  }
};
export {deleteBillingAccountRoleByIdUpdated};


const updateBillingAccountRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateBillingAccountRole method',
  args:{billingAccountRoleToBeUpdated: {type: BillingAccountRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/billingAccount/billingAccountRoles/${args.roleTypeId}?`, args.billingAccountRoleToBeUpdated, req);
  }
};
export {updateBillingAccountRole};
