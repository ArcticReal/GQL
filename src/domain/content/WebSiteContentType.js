
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

import {WebSiteContentType} from '../content/WebSiteContent.js';


const WebSiteContentTypeType = new GraphQLObjectType({
  name: 'WebSiteContentTypeType',
  description: 'Type for WebSiteContentType in content',

  fields: () => ({
    parentType: {
      type: WebSiteContentTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbiz.load(`content/content/webSiteContentTypes/find?webSiteContentTypeId=${webSiteContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    webSiteContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    webSiteContents: {
      type: new GraphQLList(WebSiteContentType),
      args : {},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbizArray.load(`content/content/webSiteContents/find?webSiteContentTypeId=${webSiteContentType.webSiteContentTypeId}`)
    },
    webSiteContentTypes: {
      type: new GraphQLList(WebSiteContentTypeType),
      args : {},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbizArray.load(`content/content/webSiteContentTypes/find?webSiteContentTypeId=${webSiteContentType.webSiteContentTypeId}`)
    }
  })
});

export {WebSiteContentTypeType};
    




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
    