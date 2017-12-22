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

const ProductFeatureCategoryResponseType = new GraphQLObjectType({
  name: 'ProductFeatureCategoryResponseType',
  description: 'response type for ProductFeatureCategory',

  fields: () => ({
    description: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString},
    productFeatureCategoryId: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryResponseType};
    