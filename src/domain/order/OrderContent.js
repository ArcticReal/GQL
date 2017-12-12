
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

import {OrderHeaderType} from '../order/OrderHeader.js';
import {OrderContentTypeType} from '../order/OrderContentType.js';
import {ContentType} from '../content/Content.js';


const OrderContentType = new GraphQLObjectType({
  name: 'OrderContentType',
  description: 'Type for OrderContent in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderContent, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderContent.orderId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (orderContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${orderContent.contentId}`)
    },
    orderContentType: {
      type: OrderContentTypeType,
      args : {orderContentTypeId: {type: GraphQLString}},
      resolve: (orderContent, args, {loaders}) => loaders.ofbiz.load(`order/orderContent/orderContentTypes/find?orderContentTypeId=${orderContent.orderContentTypeId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {OrderContentType};
    




const OrderContentInputType = new GraphQLInputObjectType({
  name: 'OrderContentInputType',
  description: 'input type for OrderContent in order',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    orderId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    orderContentTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {OrderContentInputType};
    