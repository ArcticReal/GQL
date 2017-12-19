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

const WebSitePublishPointInputType = new GraphQLInputObjectType({
  name: 'WebSitePublishPointInputType',
  description: 'input type for WebSitePublishPoint',

  fields: () => ({
    aboutContentId: {type: GraphQLString},
    contentDept: {type: GraphQLString},
    contentId: {type: GraphQLString},
    leftBarId: {type: GraphQLString},
    lineLogo: {type: GraphQLString},
    logo: {type: GraphQLString},
    medallionLogo: {type: GraphQLString},
    rightBarId: {type: GraphQLString},
    styleSheetFile: {type: GraphQLString},
    templateTitle: {type: GraphQLString}
  })
});

export {WebSitePublishPointInputType};
    