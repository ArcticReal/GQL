
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

import {ContentType} from '../content/Content.js';


const WebSitePublishPointType = new GraphQLObjectType({
  name: 'WebSitePublishPointType',
  description: 'Type for WebSitePublishPoint in content',

  fields: () => ({
    styleSheetFile: {type: GraphQLString},
    leftBarId: {type: GraphQLString},
    aboutContentId: {type: GraphQLString},
    content: {
      type: ContentType,
      args : {contentId: {type: GraphQLString}},
      resolve: (webSitePublishPoint, args, {loaders}) => loaders.ofbiz.load(`/contents/find?contentId=${webSitePublishPoint.contentId}`)
    },
    contentDept: {type: GraphQLString},
    logo: {type: GraphQLString},
    lineLogo: {type: GraphQLString},
    templateTitle: {type: GraphQLString},
    rightBarId: {type: GraphQLString},
    medallionLogo: {type: GraphQLString}
  })
});

export {WebSitePublishPointType};
    




const WebSitePublishPointInputType = new GraphQLInputObjectType({
  name: 'WebSitePublishPointInputType',
  description: 'input type for WebSitePublishPoint in content',

  fields: () => ({
    styleSheetFile: {type: GraphQLString},
    leftBarId: {type: GraphQLString},
    aboutContentId: {type: GraphQLString},
    contentId: {type: GraphQLString},
    contentDept: {type: GraphQLString},
    logo: {type: GraphQLString},
    lineLogo: {type: GraphQLString},
    templateTitle: {type: GraphQLString},
    rightBarId: {type: GraphQLString},
    medallionLogo: {type: GraphQLString}
  })
});

export {WebSitePublishPointInputType};
    