
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

import {PaymentType} from '../../accounting/Payment/PaymentType.js';
import {DeductionTypeType} from '../../accounting/DeductionType/DeductionTypeType.js';


const DeductionType = new GraphQLObjectType({
  name: 'DeductionType',
  description: 'Type for Deduction in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (deduction, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${deduction.paymentId}`)
    },
    deductionType: {
      type: DeductionTypeType,
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (deduction, args, {loaders}) => loaders.ofbiz.load(`accounting/deduction/deductionTypes/find?deductionTypeId=${deduction.deductionTypeId}`)
    },
    deductionId: {type: GraphQLString}
  })
});

export {DeductionType};
    