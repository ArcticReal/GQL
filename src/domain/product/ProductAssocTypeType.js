
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductAssocType} from '../product/ProductAssocType.js';


const ProductAssocTypeType = new GraphQLObjectType({
  name: 'ProductAssocTypeType',
  description: 'Type for ProductAssocType in product',

  fields: () => ({
    parentType: {
      type: ProductAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbiz.load(`productAssocTypes/find?productAssocTypeId=${productAssocType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString},
    productAssocType: {
      type: new GraphQLList(ProductAssocTypeType),
      args : {productAssocTypeId: {type: GraphQLString}},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbizArray.load(`productAssocTypes/find?productAssocTypeId=${productAssocType.productAssocTypeId}`)
    },
    productAssoc: {
      type: new GraphQLList(ProductAssocType),
      args : {productAssocTypeId: {type: GraphQLString}},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbizArray.load(`productAssocs/find?productAssocTypeId=${productAssocType.productAssocTypeId}`)
    }
  })
});

export {ProductAssocTypeType};
    