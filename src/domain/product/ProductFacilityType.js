
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
import {FacilityType} from '../product/FacilityType.js';


const ProductFacilityType = new GraphQLObjectType({
  name: 'ProductFacilityType',
  description: 'Type for ProductFacility in product',

  fields: () => ({
    lastInventoryCount: {type: GraphQLFloat},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productFacility, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${productFacility.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFacility, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productFacility.productId}`)
    },
    minimumStock: {type: GraphQLFloat},
    reorderQuantity: {type: GraphQLFloat},
    daysToShip: {type: GraphQLInt}
  })
});

export {ProductFacilityType};
    