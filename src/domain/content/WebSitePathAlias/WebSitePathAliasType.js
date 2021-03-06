
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

import {ContentType} from '../../content/Content/ContentType.js';


const WebSitePathAliasType = new GraphQLObjectType({
  name: 'WebSitePathAliasType',
  description: 'Type for WebSitePathAlias in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    aliasTo: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (webSitePathAlias, args, {loaders}) => loaders.ofbiz.load(`contents/find?contentId=${webSitePathAlias.contentId}`)
    },
    mapKey: {type: GraphQLString},
    webSiteId: {type: GraphQLString},
    pathAlias: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WebSitePathAliasType};
    