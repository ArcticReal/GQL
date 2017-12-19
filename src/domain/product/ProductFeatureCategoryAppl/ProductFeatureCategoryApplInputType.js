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

const ProductFeatureCategoryApplInputType = new GraphQLInputObjectType({
  name: 'ProductFeatureCategoryApplInputType',
  description: 'input type for ProductFeatureCategoryAppl',

  fields: () => ({
    fromDate: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productFeatureCategoryId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductFeatureCategoryApplInputType};
    