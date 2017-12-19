
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

import {ProdCatalogRoleType} from '../../product/ProdCatalogRole/ProdCatalogRoleType.js';
import {ProdCatalogCategoryType} from '../../product/ProdCatalogCategory/ProdCatalogCategoryType.js';
import {ProductStoreCatalogType} from '../../product/ProductStoreCatalog/ProductStoreCatalogType.js';
import {CartAbandonedLineType} from '../../order/CartAbandonedLine/CartAbandonedLineType.js';
import {ProdCatalogInvFacilityType} from '../../product/ProdCatalogInvFacility/ProdCatalogInvFacilityType.js';


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
      args : {},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`product/product/productStoreCatalogs/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogCategories: {
      type: new GraphQLList(ProdCatalogCategoryType),
      args : {},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogCategorys/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    cartAbandonedLines: {
      type: new GraphQLList(CartAbandonedLineType),
      args : {},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`order/cartAbandonedLines/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogInvFacilities: {
      type: new GraphQLList(ProdCatalogInvFacilityType),
      args : {},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogInvFacilitys/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    },
    prodCatalogRoles: {
      type: new GraphQLList(ProdCatalogRoleType),
      args : {},
      resolve: (prodCatalog, args, {loaders}) => loaders.ofbizArray.load(`product/prodCatalog/prodCatalogRoles/find?prodCatalogId=${prodCatalog.prodCatalogId}`)
    }
  })
});

export {ProdCatalogType};
    