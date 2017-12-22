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

const ProductCategoryTypeResponseType = new GraphQLObjectType({
  name: 'ProductCategoryTypeResponseType',
  description: 'response type for ProductCategoryType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productCategoryTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryTypeResponseType};
    