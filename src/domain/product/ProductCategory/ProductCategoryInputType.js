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

const ProductCategoryInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryInputType',
  description: 'input type for ProductCategory',

  fields: () => ({
    categoryImageUrl: {type: GraphQLString},
    categoryName: {type: GraphQLString},
    description: {type: GraphQLString},
    detailScreen: {type: GraphQLString},
    linkOneImageUrl: {type: GraphQLString},
    linkTwoImageUrl: {type: GraphQLString},
    longDescription: {type: GraphQLString},
    primaryParentCategoryId: {type: GraphQLString},
    productCategoryId: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString},
    showInSelect: {type: GraphQLBoolean}
  })
});

export {ProductCategoryInputType};
    