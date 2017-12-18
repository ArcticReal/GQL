
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

import {PartyRoleType} from '../party/PartyRole.js';
import {ProdCatalogType} from '../product/ProdCatalog.js';


const ProdCatalogRoleType = new GraphQLObjectType({
  name: 'ProdCatalogRoleType',
  description: 'Type for ProdCatalogRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (prodCatalogRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${prodCatalogRole.partyId}`)
    },
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogRole, args, {loaders}) => loaders.ofbiz.load(`product/prodCatalogs/find?prodCatalogId=${prodCatalogRole.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogRoleType};
    




const ProdCatalogRoleInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogRoleInputType',
  description: 'input type for ProdCatalogRole',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogRoleInputType};
    