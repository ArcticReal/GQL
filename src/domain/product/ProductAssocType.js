
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

import {ProductAssocType} from '../product/ProductAssoc.js';


const ProductAssocTypeType = new GraphQLObjectType({
  name: 'ProductAssocTypeType',
  description: 'Type for ProductAssocType in product',

  fields: () => ({
    parentType: {
      type: ProductAssocTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbiz.load(`product/product/productAssocTypes/find?productAssocTypeId=${productAssocType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString},
    productAssocTypes: {
      type: new GraphQLList(ProductAssocTypeType),
      args : {},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productAssocTypes/find?productAssocTypeId=${productAssocType.productAssocTypeId}`)
    },
    productAssocs: {
      type: new GraphQLList(ProductAssocType),
      args : {},
      resolve: (productAssocType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productAssocs/find?productAssocTypeId=${productAssocType.productAssocTypeId}`)
    }
  })
});

export {ProductAssocTypeType};
    




const ProductAssocTypeInputType = new GraphQLInputObjectType({
  name: 'ProductAssocTypeInputType',
  description: 'input type for ProductAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productAssocTypeId: {type: GraphQLString}
  })
});

export {ProductAssocTypeInputType};
    