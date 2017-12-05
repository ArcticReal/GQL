
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRole} from '../product/PartyRole.js';
import {ProdCatalog} from '../product/ProdCatalog.js';


const ProdCatalogRole = new GraphQLObjectType({
  name: 'ProdCatalogRoleType',
  description: 'Type for ProdCatalogRole in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (prodCatalogRole, args, {loaders}) => loaders.ofbizArray.load(`partyRoles/find?=${args.partyId}`)
    },
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalogRole, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogs/find?=${args.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProdCatalogRole};
    