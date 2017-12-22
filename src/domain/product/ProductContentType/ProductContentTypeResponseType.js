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

const ProductContentTypeResponseType = new GraphQLObjectType({
  name: 'ProductContentTypeResponseType',
  description: 'response type for ProductContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productContentTypeId: {type: GraphQLString}
  })
});

export {ProductContentTypeResponseType};
    