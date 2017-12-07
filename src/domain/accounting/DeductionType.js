
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentType} from '../accounting/PaymentType.js';
import {DeductionTypeType} from '../accounting/DeductionTypeType.js';


const DeductionType = new GraphQLObjectType({
  name: 'DeductionType',
  description: 'Type for Deduction in accounting',

  fields: () => ({
    amount: {type: GraphQLFloat},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (deduction, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${deduction.paymentId}`)
    },
    deductionType: {
      type: DeductionTypeType,
      args : {deductionTypeId: {type: GraphQLString}},
      resolve: (deduction, args, {loaders}) => loaders.ofbiz.load(`deductionTypes/find?deductionTypeId=${deduction.deductionTypeId}`)
    },
    deductionId: {type: GraphQLString}
  })
});

export {DeductionType};
    