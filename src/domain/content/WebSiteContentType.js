
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
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbiz.load(`webSiteContentTypes/find?webSiteContentTypeId=${webSiteContentType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    webSiteContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    webSiteContents: {
      type: new GraphQLList(WebSiteContentType),
      args : {webSiteContentTypeId: {type: GraphQLString}},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbizArray.load(`webSiteContents/find?webSiteContentTypeId=${webSiteContentType.webSiteContentTypeId}`)
    },
    webSiteContentTypes: {
      type: new GraphQLList(WebSiteContentTypeType),
      args : {webSiteContentTypeId: {type: GraphQLString}},
      resolve: (webSiteContentType, args, {loaders}) => loaders.ofbizArray.load(`webSiteContentTypes/find?webSiteContentTypeId=${webSiteContentType.webSiteContentTypeId}`)
    }
  })
});

export {WebSiteContentTypeType};
    




const WebSiteContentTypeInputType = new GraphQLInputObjectType({
  name: 'WebSiteContentTypeInputType',
  description: 'input type for WebSiteContentType in content',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    webSiteContentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {WebSiteContentTypeInputType};
    