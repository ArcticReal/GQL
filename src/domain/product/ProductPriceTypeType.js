
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductPriceType} from '../product/ProductPriceType.js';
import {ProductFeaturePriceType} from '../product/ProductFeaturePriceType.js';


const ProductPriceTypeType = new GraphQLObjectType({
  name: 'ProductPriceTypeType',
  description: 'Type for ProductPriceType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    productFeaturePrice: {
      type: new GraphQLList(ProductFeaturePriceType),
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productPriceType, args, {loaders}) => loaders.ofbizArray.load(`productFeaturePrices/find?productPriceTypeId=${productPriceType.productPriceTypeId}`)
    },
    productPrice: {
      type: new GraphQLList(ProductPriceType),
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productPriceType, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?productPriceTypeId=${productPriceType.productPriceTypeId}`)
    }
  })
});

export {ProductPriceTypeType};
    