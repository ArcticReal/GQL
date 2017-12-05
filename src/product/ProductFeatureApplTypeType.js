
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureApplType} from '../product/ProductFeatureApplType.js';


const ProductFeatureApplType = new GraphQLObjectType({
  name: 'ProductFeatureApplTypeType',
  description: 'Type for ProductFeatureApplType in product',

  fields: () => ({
    parentType: {
      type: ProductFeatureApplTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureApplType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureApplTypes/find?productFeatureApplTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    productFeatureApplTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {ProductFeatureApplType};
    