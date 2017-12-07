
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


const ProductGeoType = new GraphQLObjectType({
  name: 'ProductGeoType',
  description: 'Type for ProductGeo in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGeo, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productGeo.productId}`)
    },
    geoId: {type: GraphQLString},
    description: {type: GraphQLString},
    productGeoEnumId: {type: GraphQLString}
  })
});

export {ProductGeoType};
    