
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

import {ProductPriceType} from '../../product/ProductPrice/ProductPriceType.js';
import {ProductFeaturePriceType} from '../../product/ProductFeaturePrice/ProductFeaturePriceType.js';


const ProductPriceTypeType = new GraphQLObjectType({
  name: 'ProductPriceTypeType',
  description: 'Type for ProductPriceType in product',

  fields: () => ({
    description: {type: GraphQLString},
    productPriceTypeId: {type: GraphQLString},
    productFeaturePrices: {
      type: new GraphQLList(ProductFeaturePriceType),
      args : {},
      resolve: (productPriceType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeaturePrices/find?productPriceTypeId=${productPriceType.productPriceTypeId}`)
    },
    productPrices: {
      type: new GraphQLList(ProductPriceType),
      args : {},
      resolve: (productPriceType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productPrices/find?productPriceTypeId=${productPriceType.productPriceTypeId}`)
    }
  })
});

export {ProductPriceTypeType};
    