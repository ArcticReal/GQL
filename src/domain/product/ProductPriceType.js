
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

import {ProductPriceType} from '../product/ProductPrice.js';
import {ProductFeaturePriceType} from '../product/ProductFeaturePrice.js';


const ProductPriceTypeType = new GraphQLObjectType({
  name: 'ProductPriceTypeType',
  description: 'Type for ProductPriceType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    productFeaturePrices: {
      type: new GraphQLList(ProductFeaturePriceType),
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productPriceType, args, {loaders}) => loaders.ofbizArray.load(`productFeaturePrices/find?productPriceTypeId=${productPriceType.productPriceTypeId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {productPriceTypeId: {type: GraphQLString}},
      resolve: (productPriceType, args, {loaders}) => loaders.ofbizArray.load(`productPrices/find?productPriceTypeId=${productPriceType.productPriceTypeId}`)
    }
  })
});

export {ProductPriceTypeType};
    




const ProductPriceTypeInputType = new GraphQLInputObjectType({
  name: 'ProductPriceTypeInputType',
  description: 'input type for ProductPriceType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString}
  })
});

export {ProductPriceTypeInputType};
    