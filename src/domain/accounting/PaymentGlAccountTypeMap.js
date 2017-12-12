
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

import {GlAccountTypeType} from '../accounting/GlAccountType.js';
import {PartyType} from '../party/Party.js';
import {PaymentTypeType} from '../accounting/PaymentType.js';


const PaymentGlAccountTypeMapType = new GraphQLObjectType({
  name: 'PaymentGlAccountTypeMapType',
  description: 'Type for PaymentGlAccountTypeMap in accounting',

  fields: () => ({
    paymentType: {
      type: PaymentTypeType,
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentGlAccountTypeMap, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentTypes/find?paymentTypeId=${paymentGlAccountTypeMap.paymentTypeId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (paymentGlAccountTypeMap, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccount/glAccountTypes/find?glAccountTypeId=${paymentGlAccountTypeMap.glAccountTypeId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (paymentGlAccountTypeMap, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${paymentGlAccountTypeMap.organizationPartyId}`)
    }
  })
});

export {PaymentGlAccountTypeMapType};
    




const PaymentGlAccountTypeMapInputType = new GraphQLInputObjectType({
  name: 'PaymentGlAccountTypeMapInputType',
  description: 'input type for PaymentGlAccountTypeMap in accounting',

  fields: () => ({
    paymentTypeId: {type: GraphQLString},
    glAccountTypeId: {type: GraphQLString},
    organizationPartyId: {type: GraphQLString}
  })
});

export {PaymentGlAccountTypeMapInputType};
    