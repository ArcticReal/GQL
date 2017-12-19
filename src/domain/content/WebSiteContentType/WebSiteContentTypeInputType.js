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

const WebSiteContentTypeInputType = new GraphQLInputObjectType({
  name: 'WebSiteContentTypeInputType',
  description: 'input type for WebSiteContentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    webSiteContentTypeId: {type: GraphQLString}
  })
});

export {WebSiteContentTypeInputType};
    