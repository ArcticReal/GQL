
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

import {ProdCatalogType} from '../../product/ProdCatalog/ProdCatalogType.js';
import {FacilityType} from '../../product/Facility/FacilityType.js';


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
    