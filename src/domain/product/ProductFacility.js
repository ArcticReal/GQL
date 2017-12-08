
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
import {FacilityType} from '../product/Facility.js';


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
    




const ProductFacilityInputType = new GraphQLInputObjectType({
  name: 'ProductFacilityInputType',
  description: 'input type for ProductFacility in product',

  fields: () => ({
    lastInventoryCount: {type: GraphQLFloat},
    facilityId: {type: GraphQLString},
    productId: {type: GraphQLString},
    minimumStock: {type: GraphQLFloat},
    reorderQuantity: {type: GraphQLFloat},
    daysToShip: {type: GraphQLInt}
  })
});

export {ProductFacilityInputType};
    