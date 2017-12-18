
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

import {PaymentContentType} from '../accounting/PaymentContent.js';


const PaymentContentTypeType = new GraphQLObjectType({
  name: 'PaymentContentTypeType',
  description: 'Type for PaymentContentType in accounting',

  fields: () => ({
    parentType: {
      type: PaymentContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentContentType, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentContentTypes/find?paymentContentTypeId=${paymentContentType.parentTypeId}`)
    },
    paymentContentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    paymentContents: {
      type: new GraphQLList(PaymentContentType),
      args : {},
      resolve: (paymentContentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentContents/find?paymentContentTypeId=${paymentContentType.paymentContentTypeId}`)
    },
    paymentContentTypes: {
      type: new GraphQLList(PaymentContentTypeType),
      args : {},
      resolve: (paymentContentType, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentContentTypes/find?paymentContentTypeId=${paymentContentType.paymentContentTypeId}`)
    }
  })
});

export {PaymentContentTypeType};
    




const PaymentContentTypeInputType = new GraphQLInputObjectType({
  name: 'PaymentContentTypeInputType',
  description: 'input type for PaymentContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    paymentContentTypeId: {type: GraphQLString}
  })
});

export {PaymentContentTypeInputType};
    