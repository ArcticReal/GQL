
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

import {ProductCategoryType} from '../../product/ProductCategory/ProductCategoryType.js';
import {ProductType} from '../../product/Product/ProductType.js';
import {SalesForecastType} from '../../marketing/SalesForecast/SalesForecastType.js';


const SalesForecastDetailType = new GraphQLObjectType({
  name: 'SalesForecastDetailType',
  description: 'Type for SalesForecastDetail in marketing',

  fields: () => ({
    amount: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    productCategory: {
      type: ProductCategoryType,
      args : {productCategoryId: {type: GraphQLString}},
      resolve: (salesForecastDetail, args, {loaders}) => loaders.ofbiz.load(`product/product/productCategorys/find?productCategoryId=${salesForecastDetail.productCategoryId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (salesForecastDetail, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${salesForecastDetail.productId}`)
    },
    quantityUomId: {type: GraphQLString},
    salesForecast: {
      type: SalesForecastType,
      args : {salesForecastId: {type: GraphQLString}},
      resolve: (salesForecastDetail, args, {loaders}) => loaders.ofbiz.load(`marketing/salesForecasts/find?salesForecastId=${salesForecastDetail.salesForecastId}`)
    },
    salesForecastDetailId: {type: GraphQLString}
  })
});

export {SalesForecastDetailType};
    