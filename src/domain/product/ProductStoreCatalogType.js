
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProdCatalogType} from '../product/ProdCatalogType.js';
import {ProductStoreType} from '../product/ProductStoreType.js';


const ProductStoreCatalogType = new GraphQLObjectType({
  name: 'ProductStoreCatalogType',
  description: 'Type for ProductStoreCatalog in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreCatalog, args, {loaders}) => loaders.ofbiz.load(`productStores/find?productStoreId=${productStoreCatalog.productStoreId}`)
    },
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (productStoreCatalog, args, {loaders}) => loaders.ofbiz.load(`prodCatalogs/find?prodCatalogId=${productStoreCatalog.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreCatalogType};
    