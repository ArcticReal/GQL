
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

import {GlAccountTypeType} from '../../accounting/GlAccountType/GlAccountTypeType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {PaymentTypeType} from '../../accounting/PaymentType/PaymentTypeType.js';


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
    