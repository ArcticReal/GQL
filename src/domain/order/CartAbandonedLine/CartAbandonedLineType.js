
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
import {ProductType} from '../../product/Product/ProductType.js';


const CartAbandonedLineType = new GraphQLObjectType({
  name: 'CartAbandonedLineType',
  description: 'Type for CartAbandonedLine in order',

  fields: () => ({
    unitPrice: {type: GraphQLFloat},
    quantity: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    cartAbandonedLineSeqId: {type: GraphQLString},
    product: {
      type: ProductType,
      args : {productId: {type: GraphQLString}},
      resolve: (cartAbandonedLine, args, {loaders}) => loaders.ofbiz.load(`products/find?productId=${cartAbandonedLine.productId}`)
    },
    reservPersons: {type: GraphQLFloat},
    totalWithAdjustments: {type: GraphQLFloat},
    wasReserved: {type: GraphQLBoolean},
    reservNthPPPerc: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    reservStart: {type: GraphQLString},
    configId: {type: GraphQLString},
    reserv2ndPPPerc: {type: GraphQLFloat},
    prodCatalog: {
      type: ProdCatalogType,
      args : {prodCatalogId: {type: GraphQLString}},
      resolve: (cartAbandonedLine, args, {loaders}) => loaders.ofbiz.load(`product/prodCatalogs/find?prodCatalogId=${cartAbandonedLine.prodCatalogId}`)
    }
  })
});

export {CartAbandonedLineType};
    