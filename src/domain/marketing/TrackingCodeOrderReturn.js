
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {TrackingCodeTypeType} from '../marketing/TrackingCodeType.js';
import {TrackingCodeType} from '../marketing/TrackingCode.js';


const TrackingCodeOrderReturnType = new GraphQLObjectType({
  name: 'TrackingCodeOrderReturnType',
  description: 'Type for TrackingCodeOrderReturn in marketing',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    trackingCode: {
      type: TrackingCodeType,
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`trackingCodes/find?trackingCodeId=${trackingCodeOrderReturn.trackingCodeId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${trackingCodeOrderReturn.orderId}`)
    },
    trackingCodeType: {
      type: TrackingCodeTypeType,
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`trackingCodeTypes/find?trackingCodeTypeId=${trackingCodeOrderReturn.trackingCodeTypeId}`)
    },
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`returnHeaders/find?returnId=${trackingCodeOrderReturn.returnId}`)
    },
    siteId: {type: GraphQLString},
    hasExported: {type: GraphQLBoolean},
    affiliateReferredTimeStamp: {type: GraphQLString},
    isBillable: {type: GraphQLBoolean}
  })
});

export {TrackingCodeOrderReturnType};
    




const TrackingCodeOrderReturnInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeOrderReturnInputType',
  description: 'input type for TrackingCodeOrderReturn in marketing',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    trackingCodeId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    siteId: {type: GraphQLString},
    hasExported: {type: GraphQLBoolean},
    affiliateReferredTimeStamp: {type: GraphQLString},
    isBillable: {type: GraphQLBoolean}
  })
});

export {TrackingCodeOrderReturnInputType};
    