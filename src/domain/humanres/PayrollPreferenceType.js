
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentMethodTypeType} from '../accounting/PaymentMethodTypeType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';
import {DeductionTypeType} from '../accounting/DeductionTypeType.js';


const PayrollPreferenceType = new GraphQLObjectType({
  name: 'PayrollPreferenceType',
  description: 'Type for PayrollPreference in humanres',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    bankName: {type: GraphQLString},
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (payrollPreference, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${payrollPreference.paymentMethodTypeId}`)
    },
    accountNumber: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    payrollPreferenceSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    routingNumber: {type: GraphQLString},
    flatAmount: {type: GraphQLFloat},
    percentage: {type: GraphQLFloat},
    deductionType: {
      type: DeductionTypeType,
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (payrollPreference, args, {loaders}) => loaders.ofbiz.load(`deductionTypes/find?deductionTypeId=${payrollPreference.deductionTypeId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (payrollPreference, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${payrollPreference.partyId}`)
    }
  })
});

export {PayrollPreferenceType};
    