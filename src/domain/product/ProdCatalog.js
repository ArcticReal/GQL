
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

import {ProdCatalogRoleType} from '../product/ProdCatalogRole.js';
import {ProdCatalogCategoryType} from '../product/ProdCatalogCategory.js';
import {ProductStoreCatalogType} from '../product/ProductStoreCatalog.js';
import {CartAbandonedLineType} from '../order/CartAbandonedLine.js';
import {ProdCatalogInvFacilityType} from '../product/ProdCatalogInvFacility.js';


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
    productStoreCatalogs: {
      type: new GraphQLList(ProductStoreCatalogType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`productStoreCatalogs/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogCategories: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogCategorys/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    cartAbandonedLines: {
      type: new GraphQLList(CartAbandonedLineType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`cartAbandonedLines/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogInvFacilities: {
      type: new GraphQLList(ProdCatalogInvFacilityType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogInvFacilitys/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogRoles: {
      type: new GraphQLList(ProdCatalogRoleType),
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogRoles/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    }
  })
});

export {ProdCatalogType};
    




const ProdCatalogInputType = new GraphQLInputObjectType({
  name: 'ProdCatalogInputType',
  description: 'input type for ProdCatalog in product',

  fields: () => ({
    catalogName: {type: GraphQLString},
    headerLogo: {type: GraphQLString},
    styleSheet: {type: GraphQLString},
    templatePathPrefix: {type: GraphQLString},
    useQuickAdd: {type: GraphQLBoolean},
    contentPathPrefix: {type: GraphQLString},
    viewAllowPermReqd: {type: GraphQLBoolean},
    prodCatalogId: {type: GraphQLString},
    purchaseAllowPermReqd: {type: GraphQLBoolean}
  })
});

export {ProdCatalogInputType};
    