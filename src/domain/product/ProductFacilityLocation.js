
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

import {FacilityLocationType} from '../product/FacilityLocation.js';
import {ProductType} from '../product/Product.js';


const ProductFacilityLocationType = new GraphQLObjectType({
  name: 'ProductFacilityLocationType',
  description: 'Type for ProductFacilityLocation in product',

  fields: () => ({
    facility: {
      type: FacilityLocationType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productFacilityLocation, args, {loaders}) => loaders.ofbiz.load(`facilityLocations/find?facilityId=${productFacilityLocation.facilityId}`)
    },
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (productFacilityLocation, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${productFacilityLocation.productId}`)
    },
    moveQuantity: {type: GraphQLFloat},
    minimumStock: {type: GraphQLFloat},
    locationSeqId: {type: GraphQLString}
  })
});

export {ProductFacilityLocationType};
    




const ProductFacilityLocationInputType = new GraphQLInputObjectType({
  name: 'ProductFacilityLocationInputType',
  description: 'input type for ProductFacilityLocation in product',

  fields: () => ({
    facilityId: {type: GraphQLString},
    productId: {type: GraphQLString},
    moveQuantity: {type: GraphQLFloat},
    minimumStock: {type: GraphQLFloat},
    locationSeqId: {type: GraphQLString}
  })
});

export {ProductFacilityLocationInputType};
    