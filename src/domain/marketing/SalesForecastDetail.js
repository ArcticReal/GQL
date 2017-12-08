
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

import {ProductCategoryType} from '../product/ProductCategory.js';
import {ProductType} from '../product/Product.js';
import {SalesForecastType} from '../marketing/SalesForecast.js';


const SalesForecastDetailType = new GraphQLObjectType({
  name: 'SalesForecastDetailType',
  description: 'Type for SalesForecastDetail in marketing',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (salesForecastDetail, args, {loaders}) => loaders.ofbiz.load(`productCategorys/find?productCategoryId=${salesForecastDetail.productCategoryId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (salesForecastDetail, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${salesForecastDetail.productId}`)
    },
    quantityUomId: {type: GraphQLString},
    salesForecast: {
      type: SalesForecastType,
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecastDetail, args, {loaders}) => loaders.ofbiz.load(`salesForecasts/find?salesForecastId=${salesForecastDetail.salesForecastId}`)
    },
    salesForecastDetailId: {type: GraphQLString}
  })
});

export {SalesForecastDetailType};
    




const SalesForecastDetailInputType = new GraphQLInputObjectType({
  name: 'SalesForecastDetailInputType',
  description: 'input type for SalesForecastDetail in marketing',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    productCategoryId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantityUomId: {type: GraphQLString},
    salesForecastId: {type: GraphQLString},
    salesForecastDetailId: {type: GraphQLString}
  })
});

export {SalesForecastDetailInputType};
    