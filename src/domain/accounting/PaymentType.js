
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
      resolve: (paymentType, args, {loaders}) => loaders.ofbiz.load(`paymentTypes/find?paymentTypeId=${paymentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    paymentTypeAttrs: {
      type: new GraphQLList(PaymentTypeAttrType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`paymentTypeAttrs/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    paymentTypes: {
      type: new GraphQLList(PaymentTypeType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`paymentTypes/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    paymentGlAccountTypeMaps: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`paymentGlAccountTypeMaps/find?paymentTypeId=${paymentType.paymentTypeId}`)
    }
  })
});

export {PaymentTypeType};
    




const PaymentTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentTypeInputType',
  description: 'input type for PaymentType in accounting',

  fields: () => ({
    paymentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {PaymentTypeInputType};
    