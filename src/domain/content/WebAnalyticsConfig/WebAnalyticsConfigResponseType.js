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

const WebAnalyticsConfigResponseType = new GraphQLObjectType({
  name: 'WebAnalyticsConfigResponseType',
  description: 'response type for WebAnalyticsConfig',

  fields: () => ({
    webAnalyticsCode: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebAnalyticsConfigResponseType};
    