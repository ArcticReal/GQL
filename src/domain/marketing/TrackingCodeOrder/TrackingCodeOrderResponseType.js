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

const TrackingCodeOrderResponseType = new GraphQLObjectType({
  name: 'TrackingCodeOrderResponseType',
  description: 'response type for TrackingCodeOrder',

  fields: () => ({
    affiliateReferredTimeStamp: {type: GraphQLString},
    hasExported: {type: GraphQLBoolean},
    isBillable: {type: GraphQLBoolean},
    orderId: {type: GraphQLString},
    siteId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString}
  })
});

export {TrackingCodeOrderResponseType};
    