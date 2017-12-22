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

const WebSitePathAliasResponseType = new GraphQLObjectType({
  name: 'WebSitePathAliasResponseType',
  description: 'response type for WebSitePathAlias',

  fields: () => ({
    aliasTo: {type: GraphQLString},
    contentId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    mapKey: {type: GraphQLString},
    pathAlias: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebSitePathAliasResponseType};
    