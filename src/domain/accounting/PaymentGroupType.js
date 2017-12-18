
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

import {PaymentGroupType} from '../accounting/PaymentGroup.js';


const PaymentGroupTypeType = new GraphQLObjectType({
  name: 'PaymentGroupTypeType',
  description: 'Type for PaymentGroupType in accounting',

  fields: () => ({
    parentType: {
      type: PaymentGroupTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentGroupType, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGroupTypes/find?paymentGroupTypeId=${paymentGroupType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString},
    paymentGroupTypes: {
      type: new GraphQLList(PaymentGroupTypeType),
      args : {},
      resolve: (paymentGroupType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGroupTypes/find?paymentGroupTypeId=${paymentGroupType.paymentGroupTypeId}`)
    },
    paymentGroups: {
      type: new GraphQLList(PaymentGroupType),
      args : {},
      resolve: (paymentGroupType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGroups/find?paymentGroupTypeId=${paymentGroupType.paymentGroupTypeId}`)
    }
  })
});

export {PaymentGroupTypeType};
    




const PaymentGroupTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentGroupTypeInputType',
  description: 'input type for PaymentGroupType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentGroupTypeId: {type: GraphQLString}
  })
});

export {PaymentGroupTypeInputType};
    