
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';


const BillingAccountRoleType = new GraphQLObjectType({
  name: 'BillingAccountRoleType',
  description: 'Type for BillingAccountRole in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (billingAccountRole, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${billingAccountRole.billingAccountId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (billingAccountRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${billingAccountRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {BillingAccountRoleType};
    