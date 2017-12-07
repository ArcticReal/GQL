
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
import {ContentType} from '../content/ContentType.js';
import {PaymentContentTypeType} from '../accounting/PaymentContentTypeType.js';


const PaymentContentType = new GraphQLObjectType({
  name: 'PaymentContentType',
  description: 'Type for PaymentContent in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    paymentContentType: {
      type: PaymentContentTypeType,
      args : {paymentContentTypeId: {type: GraphQLString}},
      resolve: (paymentContent, args, {loaders}) => loaders.ofbiz.load(`paymentContentTypes/find?paymentContentTypeId=${paymentContent.paymentContentTypeId}`)
    },
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (paymentContent, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${paymentContent.paymentId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (paymentContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${paymentContent.contentId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PaymentContentType};
    