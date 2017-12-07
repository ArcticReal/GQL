
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
import {PaymentTypeAttrType} from '../accounting/PaymentTypeAttrType.js';
import {PaymentGlAccountTypeMapType} from '../accounting/PaymentGlAccountTypeMapType.js';


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
    paymentTypeAttr: {
      type: new GraphQLList(PaymentTypeAttrType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`paymentTypeAttrs/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`payments/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    paymentType: {
      type: new GraphQLList(PaymentTypeType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`paymentTypes/find?paymentTypeId=${paymentType.paymentTypeId}`)
    },
    paymentGlAccountTypeMap: {
      type: new GraphQLList(PaymentGlAccountTypeMapType),
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (paymentType, args, {loaders}) => loaders.ofbizArray.load(`paymentGlAccountTypeMaps/find?paymentTypeId=${paymentType.paymentTypeId}`)
    }
  })
});

export {PaymentTypeType};
    