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

const ProductContentTypeInputType = new GraphQLInputObjectType({
  name: 'ProductContentTypeInputType',
  description: 'input type for ProductContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    productContentTypeId: {type: GraphQLString}
  })
});

export {ProductContentTypeInputType};
    