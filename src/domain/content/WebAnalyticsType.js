
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
      resolve: (webAnalyticsType, args, {loaders}) => loaders.ofbiz.load(`webAnalyticsTypes/find?webAnalyticsTypeId=${webAnalyticsType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString},
    webAnalyticsTypes: {
      type: new GraphQLList(WebAnalyticsTypeType),
      args : {webAnalyticsTypeId: {type: GraphQLString}},
      resolve: (webAnalyticsType, args, {loaders}) => loaders.ofbizArray.load(`webAnalyticsTypes/find?webAnalyticsTypeId=${webAnalyticsType.webAnalyticsTypeId}`)
    }
  })
});

export {WebAnalyticsTypeType};
    




const WebAnalyticsTypeInputType = new GraphQLInputObjectType({
  name: 'WebAnalyticsTypeInputType',
  description: 'input type for WebAnalyticsType in content',

  fields: () => ({
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString}
  })
});

export {WebAnalyticsTypeInputType};
    