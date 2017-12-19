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

const ProductFeatureCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureCategoryInputType',
  description: 'input type for ProductFeatureCategory',

  fields: () => ({
    description: {type: GraphQLString},
    parentCategoryId: {type: GraphQLString},
    productFeatureCategoryId: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryInputType};
    