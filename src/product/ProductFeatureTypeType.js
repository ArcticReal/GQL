
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ProductFeatureType} from '../product/ProductFeatureType.js';


const ProductFeatureType = new GraphQLObjectType({
  name: 'ProductFeatureTypeType',
  description: 'Type for ProductFeatureType in product',

  fields: () => ({
    productFeatureTypeId: {type: GraphQLString},
    parentType: {
      type: ProductFeatureTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureTypes/find?productFeatureTypeId=${args.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductFeatureType};
    