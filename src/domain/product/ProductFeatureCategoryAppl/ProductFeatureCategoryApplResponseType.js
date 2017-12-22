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

const ProductFeatureCategoryApplResponseType = new GraphQLObjectType({
  name: 'ProductFeatureCategoryApplResponseType',
  description: 'response type for ProductFeatureCategoryAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryApplResponseType};
    