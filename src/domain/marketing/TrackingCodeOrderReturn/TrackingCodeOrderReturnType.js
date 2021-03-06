
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

import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {OrderHeaderType} from '../../order/OrderHeader/OrderHeaderType.js';
import {TrackingCodeTypeType} from '../../marketing/TrackingCodeType/TrackingCodeTypeType.js';
import {TrackingCodeType} from '../../marketing/TrackingCode/TrackingCodeType.js';


const TrackingCodeOrderReturnType = new GraphQLObjectType({
  name: 'TrackingCodeOrderReturnType',
  description: 'Type for TrackingCodeOrderReturn in marketing',

  fields: () => ({
    orderItemSeqId: {type: GraphQLString},
    trackingCode: {
      type: TrackingCodeType,
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`marketing/trackingCodes/find?trackingCodeId=${trackingCodeOrderReturn.trackingCodeId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${trackingCodeOrderReturn.orderId}`)
    },
    trackingCodeType: {
      type: TrackingCodeTypeType,
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`marketing/trackingCode/trackingCodeTypes/find?trackingCodeTypeId=${trackingCodeOrderReturn.trackingCodeTypeId}`)
    },
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (trackingCodeOrderReturn, args, {loaders}) => loaders.ofbiz.load(`order/returnHeaders/find?returnId=${trackingCodeOrderReturn.returnId}`)
    },
    siteId: {type: GraphQLString},
    hasExported: {type: GraphQLBoolean},
    affiliateReferredTimeStamp: {type: GraphQLString},
    isBillable: {type: GraphQLBoolean}
  })
});

export {TrackingCodeOrderReturnType};
    