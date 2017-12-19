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

const ProductFeatureTypeInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureTypeInputType',
  description: 'input type for ProductFeatureType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productFeatureTypeId: {type: GraphQLString}
  })
});

export {ProductFeatureTypeInputType};
    