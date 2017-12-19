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

const WebAnalyticsTypeInputType = new GraphQLInputObjectType({
  name: 'WebAnalyticsTypeInputType',
  description: 'input type for WebAnalyticsType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString}
  })
});

export {WebAnalyticsTypeInputType};
    