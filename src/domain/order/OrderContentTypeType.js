
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderContentType} from '../order/OrderContentType.js';


const OrderContentTypeType = new GraphQLObjectType({
  name: 'OrderContentTypeType',
  description: 'Type for OrderContentType in order',

  fields: () => ({
    parentType: {
      type: OrderContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderContentType, args, {loaders}) => loaders.ofbiz.load(`orderContentTypes/find?orderContentTypeId=${orderContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderContentTypeId: {type: GraphQLString},
    orderContent: {
      type: new GraphQLList(OrderContentType),
      args : {orderContentTypeId: {type: GraphQLString}},
      resolve: (orderContentType, args, {loaders}) => loaders.ofbizArray.load(`orderContents/find?orderContentTypeId=${orderContentType.orderContentTypeId}`)
    },
    orderContentType: {
      type: new GraphQLList(OrderContentTypeType),
      args : {orderContentTypeId: {type: GraphQLString}},
      resolve: (orderContentType, args, {loaders}) => loaders.ofbizArray.load(`orderContentTypes/find?orderContentTypeId=${orderContentType.orderContentTypeId}`)
    }
  })
});

export {OrderContentTypeType};
    