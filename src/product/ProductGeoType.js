
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Product} from '../product/Product.js';
import {Geo} from '../product/Geo.js';


const ProductGeo = new GraphQLObjectType({
  name: 'ProductGeoType',
  description: 'Type for ProductGeo in product',

  fields: () => ({
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productGeo, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    geo: {
      type: GeoType,
      args : {geoId: {type: GraphQLString}},
      resolve: (productGeo, args, {loaders}) => loaders.ofbizArray.load(`geos/find?=${args.geoId}`)
    },
    description: {type: GraphQLString},
    productGeoEnumId: {type: GraphQLString}
  })
});

export {ProductGeo};
    