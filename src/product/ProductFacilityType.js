
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {Facility} from '../product/Facility.js';
import {Product} from '../product/Product.js';


const ProductFacility = new GraphQLObjectType({
  name: 'ProductFacilityType',
  description: 'Type for ProductFacility in product',

  fields: () => ({
    lastInventoryCount: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productFacility, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFacility, args, {loaders}) => loaders.ofbizArray.load(`products/find?=${args.productId}`)
    },
    minimumStock: {type: GraphQLFloat},
    reorderQuantity: {type: GraphQLFloat},
    daysToShip: {type: GraphQLInt}
  })
});

export {ProductFacility};
    