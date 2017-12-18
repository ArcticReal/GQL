
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
import {PaymentTypeAttrType} from '../accounting/PaymentTypeAttr.js';
import {PaymentGlAccountTypeMapType} from '../accounting/PaymentGlAccountTypeMap.js';


const PaymentTypeType = new GraphQLObjectType({
  name: 'PaymentTypeType',
  description: 'Type for PaymentType in accounting',

  fields: () => ({
    paymentTypeId: {type: GraphQLString},
    parentType: {
      type: PaymentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentTypes/find?paymentTypeId=${paymentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    paymentTypeAttrs: {
      type: new GraphQLList(PaymentTypeAttrType),
      args : {},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentTypeAttrs/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    paymentTypes: {
      type: new GraphQLList(PaymentTypeType),
      args : {},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentTypes/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    paymentGlAccountTypeMaps: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/glAccount/paymentGlAccountTypeMaps/find?paymentTypeId=${paymentType.paymentTypeId}`)
    }
  })
});

export {PaymentTypeType};
    




const PaymentTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentTypeInputType',
  description: 'input type for PaymentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString}
  })
});

export {PaymentTypeInputType};
    