
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

import {ProductType} from '../product/Product.js';
import {OrderItemGroupOrderType} from '../order/OrderItemGroupOrder.js';


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
    orderItemGroupOrders: {
      type: new GraphQLList(OrderItemGroupOrderType),
      args : {groupOrderId: {type: GraphQLString}},
      resolve: (productGroupOrder, args, {loaders}) => loaders.ofbizArray.load(`orderItemGroupOrders/find?groupOrderId=${productGroupOrder.groupOrderId}`)
    }
  })
});

export {ProductGroupOrderType};
    




const ProductGroupOrderInputType = new GraphQLInputObjectType({
  name: 'ProductGroupOrderInputType',
  description: 'input type for ProductGroupOrder in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    jobId: {type: GraphQLString},
    groupOrderId: {type: GraphQLString},
    productId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    reqOrderQty: {type: GraphQLFloat},
    soldOrderQty: {type: GraphQLFloat},
    thruDate: {type: GraphQLString}
  })
});

export {ProductGroupOrderInputType};
    