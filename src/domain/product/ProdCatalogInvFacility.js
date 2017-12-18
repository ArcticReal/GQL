
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

import {ProdCatalogType} from '../product/ProdCatalog.js';
import {FacilityType} from '../product/Facility.js';


const ProdCatalogInvFacilityType = new GraphQLObjectType({
  name: 'ProdCatalogInvFacilityType',
  description: 'Type for ProdCatalogInvFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (prodCatalogInvFacility, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${prodCatalogInvFacility.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogInvFacility, args, {loaders}) => loaders.ofbiz.load(`product/prodCatalogs/find?prodCatalogId=${prodCatalogInvFacility.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogInvFacilityType};
    




const ProdCatalogInvFacilityInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogInvFacilityInputType',
  description: 'input type for ProdCatalogInvFacility',

  fields: () => ({
    facilityId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogInvFacilityInputType};
    