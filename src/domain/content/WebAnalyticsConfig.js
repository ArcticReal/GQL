
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



const WebAnalyticsConfigType = new GraphQLObjectType({
  name: 'WebAnalyticsConfigType',
  description: 'Type for WebAnalyticsConfig in content',

  fields: () => ({
    webAnalyticsCode: {type: GraphQLString},
    webAnalyticsTypeId: {type: GraphQLString},
    webSiteId: {type: GraphQLString}
  })
});

export {WebAnalyticsConfigType};
    




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
    