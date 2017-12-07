
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogType} from '../product/ProdCatalogType.js';
import {FacilityType} from '../product/FacilityType.js';


const ProdCatalogInvFacilityType = new GraphQLObjectType({
  name: 'ProdCatalogInvFacilityType',
  description: 'Type for ProdCatalogInvFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (prodCatalogInvFacility, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${prodCatalogInvFacility.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogInvFacility, args, {loaders}) => loaders.ofbiz.load(`prodCatalogs/find?prodCatalogId=${prodCatalogInvFacility.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogInvFacilityType};
    