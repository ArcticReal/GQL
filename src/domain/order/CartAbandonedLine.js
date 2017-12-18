
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

import {ProdCatalogType} from '../product/ProdCatalog.js';
import {ProductType} from '../product/Product.js';


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
      resolve: (cartAbandonedLine, args, {loaders}) => loaders.ofbiz.load(`/products/find?productId=${cartAbandonedLine.productId}`)
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
    




const CartAbandonedLineInputType = new GraphQLInputObjectType({
  name: 'CartAbandonedLineInputType',
  description: 'input type for CartAbandonedLine',

  fields: () => ({
    cartAbandonedLineSeqId: {type: GraphQLString},
    configId: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    productId: {type: GraphQLString},
    quantity: {type: GraphQLFloat},
    reserv2ndPPPerc: {type: GraphQLFloat},
    reservLength: {type: GraphQLFloat},
    reservNthPPPerc: {type: GraphQLFloat},
    reservPersons: {type: GraphQLFloat},
    reservStart: {type: GraphQLString},
    totalWithAdjustments: {type: GraphQLFloat},
    unitPrice: {type: GraphQLFloat},
    visitId: {type: GraphQLString},
    wasReserved: {type: GraphQLBoolean}
  })
});

export {CartAbandonedLineInputType};
    