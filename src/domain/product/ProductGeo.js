
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


const ProductGeoType = new GraphQLObjectType({
  name: 'ProductGeoType',
  description: 'Type for ProductGeo in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGeo, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${productGeo.productId}`)
    },
    geoId: {type: GraphQLString},
    description: {type: GraphQLString},
    productGeoEnumId: {type: GraphQLString}
  })
});

export {ProductGeoType};
    




const ProductGeoInputType = new GraphQLInputObjectType({
  name: 'ProductGeoInputType',
  description: 'input type for ProductGeo',

  fields: () => ({
    description: {type: GraphQLString},
    geoId: {type: GraphQLString},
    productGeoEnumId: {type: GraphQLString},
    productId: {type: GraphQLString}
  })
});

export {ProductGeoInputType};
    