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

const ProductCategoryContentTypeResponseType = new GraphQLObjectType({
  name: 'ProductCategoryContentTypeResponseType',
  description: 'response type for ProductCategoryContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    prodCatContentTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryContentTypeResponseType};
    