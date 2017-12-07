
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentContentType} from '../accounting/PaymentContentType.js';


const PaymentContentTypeType = new GraphQLObjectType({
  name: 'PaymentContentTypeType',
  description: 'Type for PaymentContentType in accounting',

  fields: () => ({
    parentType: {
      type: PaymentContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (paymentContentType, args, {loaders}) => loaders.ofbiz.load(`paymentContentTypes/find?paymentContentTypeId=${paymentContentType.parentTypeId}`)
    },
    paymentContentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    paymentContent: {
      type: new GraphQLList(PaymentContentType),
      args : {paymentContentTypeId: {type: GraphQLString}},
      resolve: (paymentContentType, args, {loaders}) => loaders.ofbizArray.load(`paymentContents/find?paymentContentTypeId=${paymentContentType.paymentContentTypeId}`)
    },
    paymentContentType: {
      type: new GraphQLList(PaymentContentTypeType),
      args : {paymentContentTypeId: {type: GraphQLString}},
      resolve: (paymentContentType, args, {loaders}) => loaders.ofbizArray.load(`paymentContentTypes/find?paymentContentTypeId=${paymentContentType.paymentContentTypeId}`)
    }
  })
});

export {PaymentContentTypeType};
    