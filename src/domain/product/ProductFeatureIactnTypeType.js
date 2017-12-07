
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureIactnType} from '../product/ProductFeatureIactnType.js';


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
    productFeatureIactn: {
      type: new GraphQLList(ProductFeatureIactnType),
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactns/find?productFeatureIactnTypeId=${productFeatureIactnType.productFeatureIactnTypeId}`)
    },
    productFeatureIactnType: {
      type: new GraphQLList(ProductFeatureIactnTypeType),
      args : {productFeatureIactnTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactnType.productFeatureIactnTypeId}`)
    }
  })
});

export {ProductFeatureIactnTypeType};
    