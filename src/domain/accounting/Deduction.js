
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

import {PaymentType} from '../accounting/Payment.js';
import {DeductionTypeType} from '../accounting/DeductionType.js';


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
    




const DeductionInputType = new GraphQLInputObjectType({
  name: 'DeductionInputType',
  description: 'input type for Deduction in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    paymentId: {type: GraphQLString},
    deductionTypeId: {type: GraphQLString},
    deductionId: {type: GraphQLString}
  })
});

export {DeductionInputType};
    