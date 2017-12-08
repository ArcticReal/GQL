
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

import {ProductFeatureIactnType} from '../product/ProductFeatureIactn.js';


const ProductFeatureIactnTypeType = new GraphQLObjectType({
  name: 'ProductFeatureIactnTypeType',
  description: 'Type for ProductFeatureIactnType in product',

  fields: () => ({
    parentType: {
      type: ProductFeatureIactnTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbiz.load(`productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactnType.parentTypeId}`)
    },
    productFeatureIactnTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productFeatureIactns: {
      type: new GraphQLList(ProductFeatureIactnType),
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactns/find?productFeatureIactnTypeId=${productFeatureIactnType.productFeatureIactnTypeId}`)
    },
    productFeatureIactnTypes: {
      type: new GraphQLList(ProductFeatureIactnTypeType),
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactnType.productFeatureIactnTypeId}`)
    }
  })
});

export {ProductFeatureIactnTypeType};
    




const ProductFeatureIactnTypeInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureIactnTypeInputType',
  description: 'input type for ProductFeatureIactnType in product',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    productFeatureIactnTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductFeatureIactnTypeInputType};
    