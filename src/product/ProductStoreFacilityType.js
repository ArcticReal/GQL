
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
import {ProductStore} from '../product/ProductStore.js';


const ProductStoreFacility = new GraphQLObjectType({
  name: 'ProductStoreFacilityType',
  description: 'Type for ProductStoreFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (productStoreFacility, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreFacility, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreFacility};
    