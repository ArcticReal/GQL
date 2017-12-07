
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {OrderContentTypeType} from '../order/OrderContentTypeType.js';
import {ContentType} from '../content/ContentType.js';


const OrderContentType = new GraphQLObjectType({
  name: 'OrderContentType',
  description: 'Type for OrderContent in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderContent, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderContent.orderId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (orderContent, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${orderContent.contentId}`)
    },
    orderContentType: {
      type: OrderContentTypeType,
      args : {orderContentTypeId: {type: GraphQLString}},
      resolve: (orderContent, args, {loaders}) => loaders.ofbiz.load(`orderContentTypes/find?orderContentTypeId=${orderContent.orderContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {OrderContentType};
    