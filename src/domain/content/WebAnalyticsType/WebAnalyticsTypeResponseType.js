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

const WebAnalyticsTypeResponseType = new GraphQLObjectType({
  name: 'WebAnalyticsTypeResponseType',
  description: 'response type for WebAnalyticsType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString}
  })
});

export {WebAnalyticsTypeResponseType};
    