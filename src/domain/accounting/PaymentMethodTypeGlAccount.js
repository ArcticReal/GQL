
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

import {PaymentMethodTypeType} from '../accounting/PaymentMethodType.js';
import {PartyType} from '../party/Party.js';
import {GlAccountType} from '../accounting/GlAccount.js';


const PaymentMethodTypeGlAccountType = new GraphQLObjectType({
  name: 'PaymentMethodTypeGlAccountType',
  description: 'Type for PaymentMethodTypeGlAccount in accounting',

  fields: () => ({
    glAccount: {
      type: GlAccountType,
      args : {glAccountId: {type: GraphQLString}},
      resolve: (paymentMethodTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${paymentMethodTypeGlAccount.glAccountId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (paymentMethodTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${paymentMethodTypeGlAccount.organizationPartyId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (paymentMethodTypeGlAccount, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${paymentMethodTypeGlAccount.paymentMethodTypeId}`)
    }
  })
});

export {PaymentMethodTypeGlAccountType};
    




const PaymentMethodTypeGlAccountInputType = new GraphQLInputObjectType({
  name: 'PaymentMethodTypeGlAccountInputType',
  description: 'input type for PaymentMethodTypeGlAccount',

  fields: () => ({
    glAccountId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString}
  })
});

export {PaymentMethodTypeGlAccountInputType};
    