
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
import {ProdCatalog} from '../product/ProdCatalog.js';


const ProdCatalogInvFacility = new GraphQLObjectType({
  name: 'ProdCatalogInvFacilityType',
  description: 'Type for ProdCatalogInvFacility in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (prodCatalogInvFacility, args, {loaders}) => loaders.ofbizArray.load(`facilitys/find?=${args.facilityId}`)
    },
    sequenceNum: {type: GraphQLInt},
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogInvFacility, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogs/find?=${args.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogInvFacility};
    