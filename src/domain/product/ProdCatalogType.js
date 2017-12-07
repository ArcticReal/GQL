
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogRoleType} from '../product/ProdCatalogRoleType.js';
import {ProdCatalogCategoryType} from '../product/ProdCatalogCategoryType.js';
import {ProductStoreCatalogType} from '../product/ProductStoreCatalogType.js';
import {CartAbandonedLineType} from '../order/CartAbandonedLineType.js';
import {ProdCatalogInvFacilityType} from '../product/ProdCatalogInvFacilityType.js';


const ProdCatalogType = new GraphQLObjectType({
  name: 'ProdCatalogType',
  description: 'Type for ProdCatalog in product',

  fields: () => ({
    catalogName: {type: GraphQLString},
    headerLogo: {type: GraphQLString},
    styleSheet: {type: GraphQLString},
    templatePathPrefix: {type: GraphQLString},
    useQuickAdd: {type: GraphQLBoolean},
    contentPathPrefix: {type: GraphQLString},
    viewAllowPermReqd: {type: GraphQLBoolean},
    prodCatalogId: {type: GraphQLString},
    purchaseAllowPermReqd: {type: GraphQLBoolean},
    productStoreCatalog: {
      type: new GraphQLList(ProductStoreCatalogType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`productStoreCatalogs/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogCategory: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategorys/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    cartAbandonedLine: {
      type: new GraphQLList(CartAbandonedLineType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`cartAbandonedLines/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogInvFacility: {
      type: new GraphQLList(ProdCatalogInvFacilityType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogInvFacilitys/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogRole: {
      type: new GraphQLList(ProdCatalogRoleType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogRoles/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    }
  })
});

export {ProdCatalogType};
    