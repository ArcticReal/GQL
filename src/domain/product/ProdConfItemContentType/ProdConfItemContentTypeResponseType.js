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

const ProdConfItemContentTypeResponseType = new GraphQLObjectType({
  name: 'ProdConfItemContentTypeResponseType',
  description: 'response type for ProdConfItemContentType',

  fields: () => ({
    confItemContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {ProdConfItemContentTypeResponseType};
    