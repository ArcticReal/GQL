
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
import {ContentType} from '../content/Content.js';
import {PaymentContentTypeType} from '../accounting/PaymentContentType.js';


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
    




const PaymentContentInputType = new GraphQLInputObjectType({
  name: 'PaymentContentInputType',
  description: 'input type for PaymentContent in accounting',

  fields: () => ({
    fromDate: {type: GraphQLString},
    paymentContentTypeId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PaymentContentInputType};
    