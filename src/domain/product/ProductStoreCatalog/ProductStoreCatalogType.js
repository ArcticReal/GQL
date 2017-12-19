
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
import {ProductStoreType} from '../../product/ProductStore/ProductStoreType.js';


const ProductStoreCatalogType = new GraphQLObjectType({
  name: 'ProductStoreCatalogType',
  description: 'Type for ProductStoreCatalog in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreCatalog, args, {loaders}) => loaders.ofbiz.load(`product/product/productStores/find?productStoreId=${productStoreCatalog.productStoreId}`)
    },
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (productStoreCatalog, args, {loaders}) => loaders.ofbiz.load(`product/prodCatalogs/find?prodCatalogId=${productStoreCatalog.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreCatalogType};
    