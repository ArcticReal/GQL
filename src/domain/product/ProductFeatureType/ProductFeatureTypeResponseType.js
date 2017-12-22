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

const ProductFeatureTypeResponseType = new GraphQLObjectType({
  name: 'ProductFeatureTypeResponseType',
  description: 'response type for ProductFeatureType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productFeatureTypeId: {type: GraphQLString}
  })
});

export {ProductFeatureTypeResponseType};
    