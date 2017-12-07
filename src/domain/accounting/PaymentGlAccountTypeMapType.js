
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlAccountTypeType} from '../accounting/GlAccountTypeType.js';
import {PartyType} from '../party/PartyType.js';
import {PaymentTypeType} from '../accounting/PaymentTypeType.js';


const PaymentGlAccountTypeMapType = new GraphQLObjectType({
  name: 'PaymentGlAccountTypeMapType',
  description: 'Type for PaymentGlAccountTypeMap in accounting',

  fields: () => ({
    paymentType: {
      type: PaymentTypeType,
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentGlAccountTypeMap, args, {loaders}) => loaders.ofbiz.load(`paymentTypes/find?paymentTypeId=${paymentGlAccountTypeMap.paymentTypeId}`)
    },
    glAccountType: {
      type: GlAccountTypeType,
      args : {glAccountTypeId: {type: GraphQLString}},
      resolve: (paymentGlAccountTypeMap, args, {loaders}) => loaders.ofbiz.load(`glAccountTypes/find?glAccountTypeId=${paymentGlAccountTypeMap.glAccountTypeId}`)
    },
    organizationParty: {
      type: PartyType,
      args : {organizationPartyId: {type: GraphQLString}},
      resolve: (paymentGlAccountTypeMap, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${paymentGlAccountTypeMap.organizationPartyId}`)
    }
  })
});

export {PaymentGlAccountTypeMapType};
    