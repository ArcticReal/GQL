
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
import {WebSiteContentTypeType} from '../../content/WebSiteContentType/WebSiteContentTypeType.js';


const WebSiteContentType = new GraphQLObjectType({
  name: 'WebSiteContentType',
  description: 'Type for WebSiteContent in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    webSiteContentType: {
      type: WebSiteContentTypeType,
      args : {webSiteContentTypeId: {type: GraphQLString}},
      resolve: (webSiteContent, args, {loaders}) => loaders.ofbiz.load(`content/content/webSiteContentTypes/find?webSiteContentTypeId=${webSiteContent.webSiteContentTypeId}`)
    },
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (webSiteContent, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${webSiteContent.contentId}`)
    },
    webSiteId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WebSiteContentType};
    