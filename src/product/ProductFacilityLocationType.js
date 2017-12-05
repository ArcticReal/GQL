
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FacilityLocation} from '../product/FacilityLocation.js';
import {Product} from '../product/Product.js';


const ProductFacilityLocation = new GraphQLObjectType({
  name: 'ProductFacilityLocationType',
  description: 'Type for ProductFacilityLocation in product',

  fields: () => ({
    facility: {
      type: FacilityLocationType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productFacilityLocation, args, {loaders}) => loaders.ofbizArray.load(`facilityLocations/find?=${args.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFacilityLocation, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    moveQuantity: {type: GraphQLFloat},
    minimumStock: {type: GraphQLFloat},
    locationSeqId: {type: GraphQLString}
  })
});

export {ProductFacilityLocation};
    