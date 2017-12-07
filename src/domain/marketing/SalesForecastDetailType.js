
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductCategoryType} from '../product/ProductCategoryType.js';
import {ProductType} from '../product/ProductType.js';
import {SalesForecastType} from '../marketing/SalesForecastType.js';


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
    