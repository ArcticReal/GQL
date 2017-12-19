
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {ProdCatalogType} from '../../product/ProdCatalog/ProdCatalogType.js';


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
    