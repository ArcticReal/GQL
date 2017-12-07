
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductType} from '../product/ProductType.js';
import {OrderItemGroupOrderType} from '../order/OrderItemGroupOrderType.js';


const ProductGroupOrderType = new GraphQLObjectType({
  name: 'ProductGroupOrderType',
  description: 'Type for ProductGroupOrder in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    jobId: {type: GraphQLString},
    groupOrderId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGroupOrder, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productGroupOrder.productId}`)
    },
    statusId: {type: GraphQLString},
    reqOrderQty: {type: GraphQLFloat},
    soldOrderQty: {type: GraphQLFloat},
    thruDate: {type: GraphQLString},
    orderItemGroupOrder: {
      type: new GraphQLList(OrderItemGroupOrderType),
      args : {groupOrderId: {type: GraphQLString}},
      resolve: (productGroupOrder, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroupOrders/find?groupOrderId=${productGroupOrder.groupOrderId}`)
    }
  })
});

export {ProductGroupOrderType};
    