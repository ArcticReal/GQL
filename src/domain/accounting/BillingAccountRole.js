
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

import {PartyRoleType} from '../party/PartyRole.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';


const BillingAccountRoleType = new GraphQLObjectType({
  name: 'BillingAccountRoleType',
  description: 'Type for BillingAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccountRole, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${billingAccountRole.billingAccountId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (billingAccountRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${billingAccountRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountRoleType};
    




const BillingAccountRoleInputType = new GraphQLInputObjectType({
  name: 'BillingAccountRoleInputType',
  description: 'input type for BillingAccountRole',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountRoleInputType};
    