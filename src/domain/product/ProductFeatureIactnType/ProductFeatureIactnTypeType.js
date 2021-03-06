
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

import {ProductFeatureIactnType} from '../../product/ProductFeatureIactn/ProductFeatureIactnType.js';


const ProductFeatureIactnTypeType = new GraphQLObjectType({
  name: 'ProductFeatureIactnTypeType',
  description: 'Type for ProductFeatureIactnType in product',

  fields: () => ({
    parentType: {
      type: ProductFeatureIactnTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbiz.load(`product/product/productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactnType.parentTypeId}`)
    },
    productFeatureIactnTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    productFeatureIactns: {
      type: new GraphQLList(ProductFeatureIactnType),
      args : {},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureIactns/find?productFeatureIactnTypeId=${productFeatureIactnType.productFeatureIactnTypeId}`)
    },
    productFeatureIactnTypes: {
      type: new GraphQLList(ProductFeatureIactnTypeType),
      args : {},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`product/product/productFeatureIactnTypes/find?productFeatureIactnTypeId=${productFeatureIactnType.productFeatureIactnTypeId}`)
    }
  })
});

export {ProductFeatureIactnTypeType};
    