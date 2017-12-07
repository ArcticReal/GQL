
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStoreType} from '../product/ProductStoreType.js';
import {FacilityType} from '../product/FacilityType.js';


const ProductStoreFacilityType = new GraphQLObjectType({
  name: 'ProductStoreFacilityType',
  description: 'Type for ProductStoreFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productStoreFacility, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${productStoreFacility.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreFacility, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreFacility.productStoreId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreFacilityType};
    