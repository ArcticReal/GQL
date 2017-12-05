
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductStore} from '../product/ProductStore.js';
import {ProdCatalog} from '../product/ProdCatalog.js';


const ProductStoreCatalog = new GraphQLObjectType({
  name: 'ProductStoreCatalogType',
  description: 'Type for ProductStoreCatalog in product',

  fields: () => ({
    fromDate: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    productStore: {
      type: ProductStoreType,
      args : {productStoreId: {type: GraphQLString}},
      resolve: (productStoreCatalog, args, {loaders}) => loaders.ofbizArray.load(`productStores/find?=${args.productStoreId}`)
    },
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (productStoreCatalog, args, {loaders}) => loaders.ofbizArray.load(`prodCatalogs/find?=${args.prodCatalogId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {ProductStoreCatalog};
    