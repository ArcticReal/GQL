
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
import {PartyRoleType} from '../party/PartyRole.js';
import {DeductionTypeType} from '../accounting/DeductionType.js';


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
      resolve: (payrollPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${payrollPreference.paymentMethodTypeId}`)
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
      resolve: (payrollPreference, args, {loaders}) => loaders.ofbiz.load(`accounting/deduction/deductionTypes/find?deductionTypeId=${payrollPreference.deductionTypeId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (payrollPreference, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${payrollPreference.partyId}`)
    }
  })
});

export {PayrollPreferenceType};
    




const PayrollPreferenceInputType = new GraphQLInputObjectType({
  name: 'PayrollPreferenceInputType',
  description: 'input type for PayrollPreference in humanres',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    bankName: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    accountNumber: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    payrollPreferenceSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    routingNumber: {type: GraphQLString},
    flatAmount: {type: GraphQLFloat},
    percentage: {type: GraphQLFloat},
    deductionTypeId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {PayrollPreferenceInputType};
    