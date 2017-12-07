
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const WebAnalyticsTypeType = new GraphQLObjectType({
  name: 'WebAnalyticsTypeType',
  description: 'Type for WebAnalyticsType in content',

  fields: () => ({
    parentType: {
      type: WebAnalyticsTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (webAnalyticsType, args, {loaders}) => loaders.ofbiz.load(`webAnalyticsTypes/find?webAnalyticsTypeId=${webAnalyticsType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString},
    webAnalyticsType: {
      type: new GraphQLList(WebAnalyticsTypeType),
      args : {webAnalyticsTypeId: {type: GraphQLString}},
      resolve: (webAnalyticsType, args, {loaders}) => loaders.ofbizArray.load(`webAnalyticsTypes/find?webAnalyticsTypeId=${webAnalyticsType.webAnalyticsTypeId}`)
    }
  })
});

export {WebAnalyticsTypeType};
    