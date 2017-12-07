
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WebSiteContentType} from '../content/WebSiteContentType.js';


const WebSiteContentTypeType = new GraphQLObjectType({
  name: 'WebSiteContentTypeType',
  description: 'Type for WebSiteContentType in content',

  fields: () => ({
    parentType: {
      type: WebSiteContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbiz.load(`webSiteContentTypes/find?webSiteContentTypeId=${webSiteContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    webSiteContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    webSiteContent: {
      type: new GraphQLList(WebSiteContentType),
      args : {webSiteContentTypeId: {type: GraphQLString}},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbizArray.load(`webSiteContents/find?webSiteContentTypeId=${webSiteContentType.webSiteContentTypeId}`)
    },
    webSiteContentType: {
      type: new GraphQLList(WebSiteContentTypeType),
      args : {webSiteContentTypeId: {type: GraphQLString}},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbizArray.load(`webSiteContentTypes/find?webSiteContentTypeId=${webSiteContentType.webSiteContentTypeId}`)
    }
  })
});

export {WebSiteContentTypeType};
    