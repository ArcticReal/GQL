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

const TrackingCodeOrderReturnResponseType = new GraphQLObjectType({
  name: 'TrackingCodeOrderReturnResponseType',
  description: 'response type for TrackingCodeOrderReturn',

  fields: () => ({
    affiliateReferredTimeStamp: {type: GraphQLString},
    hasExported: {type: GraphQLBoolean},
    isBillable: {type: GraphQLBoolean},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    siteId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString}
  })
});

export {TrackingCodeOrderReturnResponseType};
    