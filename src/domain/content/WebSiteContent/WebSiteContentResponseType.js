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

const WebSiteContentResponseType = new GraphQLObjectType({
  name: 'WebSiteContentResponseType',
  description: 'response type for WebSiteContent',

  fields: () => ({
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    webSiteContentTypeId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSiteContentResponseType};
    