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

const ProductCategoryContentTypeInputType = new GraphQLInputObjectType({
  name: 'ProductCategoryContentTypeInputType',
  description: 'input type for ProductCategoryContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    prodCatContentTypeId: {type: GraphQLString}
  })
});

export {ProductCategoryContentTypeInputType};
    