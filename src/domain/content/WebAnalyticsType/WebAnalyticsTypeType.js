
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



const WebAnalyticsTypeType = new GraphQLObjectType({
  name: 'WebAnalyticsTypeType',
  description: 'Type for WebAnalyticsType in content',

  fields: () => ({
    parentType: {
      type: WebAnalyticsTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (webAnalyticsType, args, {loaders}) => loaders.ofbiz.load(`content/webAnalyticsTypes/find?webAnalyticsTypeId=${webAnalyticsType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString},
    webAnalyticsTypes: {
      type: new GraphQLList(WebAnalyticsTypeType),
      args : {},
      resolve: (webAnalyticsType, args, {loaders}) => loaders.ofbizArray.load(`content/webAnalyticsTypes/find?webAnalyticsTypeId=${webAnalyticsType.webAnalyticsTypeId}`)
    }
  })
});

export {WebAnalyticsTypeType};
    