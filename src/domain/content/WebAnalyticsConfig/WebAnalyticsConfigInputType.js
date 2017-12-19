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

const WebAnalyticsConfigInputType = new GraphQLInputObjectType({
  name: 'WebAnalyticsConfigInputType',
  description: 'input type for WebAnalyticsConfig',

  fields: () => ({
    webAnalyticsCode: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebAnalyticsConfigInputType};
    