
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

import {OrderContentType} from '../order/OrderContent.js';


const OrderContentTypeType = new GraphQLObjectType({
  name: 'OrderContentTypeType',
  description: 'Type for OrderContentType in order',

  fields: () => ({
    parentType: {
      type: OrderContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (orderContentType, args, {loaders}) => loaders.ofbiz.load(`order/orderContent/orderContentTypes/find?orderContentTypeId=${orderContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderContentTypeId: {type: GraphQLString},
    orderContents: {
      type: new GraphQLList(OrderContentType),
      args : {},
      resolve: (orderContentType, args, {loaders}) => loaders.ofbizArray.load(`order/orderContents/find?orderContentTypeId=${orderContentType.orderContentTypeId}`)
    },
    orderContentTypes: {
      type: new GraphQLList(OrderContentTypeType),
      args : {},
      resolve: (orderContentType, args, {loaders}) => loaders.ofbizArray.load(`order/orderContent/orderContentTypes/find?orderContentTypeId=${orderContentType.orderContentTypeId}`)
    }
  })
});

export {OrderContentTypeType};
    




const OrderContentTypeInputType = new GraphQLInputObjectType({
  name: 'OrderContentTypeInputType',
  description: 'input type for OrderContentType in order',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    orderContentTypeId: {type: GraphQLString}
  })
});

export {OrderContentTypeInputType};
    