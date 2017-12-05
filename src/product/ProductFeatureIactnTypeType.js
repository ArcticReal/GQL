
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


const ProductFeatureIactnType = new GraphQLObjectType({
  name: 'ProductFeatureIactnTypeType',
  description: 'Type for ProductFeatureIactnType in product',

  fields: () => ({
    parentType: {
      type: ProductFeatureIactnTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (productFeatureIactnType, args, {loaders}) => loaders.ofbizArray.load(`productFeatureIactnTypes/find?productFeatureIactnTypeId=${args.parentTypeId}`)
    },
    productFeatureIactnTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {ProductFeatureIactnType};
    