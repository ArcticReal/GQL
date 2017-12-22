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

const WebSiteContentTypeResponseType = new GraphQLObjectType({
  name: 'WebSiteContentTypeResponseType',
  description: 'response type for WebSiteContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    webSiteContentTypeId: {type: GraphQLString}
  })
});

export {WebSiteContentTypeResponseType};
    