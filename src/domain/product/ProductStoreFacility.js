
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

import {ProductStoreType} from '../product/ProductStore.js';
import {FacilityType} from '../product/Facility.js';


const ProductStoreFacilityType = new GraphQLObjectType({
  name: 'ProductStoreFacilityType',
  description: 'Type for ProductStoreFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productStoreFacility, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${productStoreFacility.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreFacility, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreFacility.productStoreId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreFacilityType};
    




const ProductStoreFacilityInputType = new GraphQLInputObjectType({
  name: 'ProductStoreFacilityInputType',
  description: 'input type for ProductStoreFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facilityId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStoreId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreFacilityInputType};
    