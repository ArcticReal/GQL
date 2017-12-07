
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {TrackingCodeTypeType} from '../marketing/TrackingCodeTypeType.js';
import {TrackingCodeType} from '../marketing/TrackingCodeType.js';


const TrackingCodeOrderType = new GraphQLObjectType({
  name: 'TrackingCodeOrderType',
  description: 'Type for TrackingCodeOrder in marketing',

  fields: () => ({
    trackingCode: {
      type: TrackingCodeType,
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCodeOrder, args, {loaders}) => loaders.ofbiz.load(`trackingCodes/find?trackingCodeId=${trackingCodeOrder.trackingCodeId}`)
    },
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (trackingCodeOrder, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${trackingCodeOrder.orderId}`)
    },
    trackingCodeType: {
      type: TrackingCodeTypeType,
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeOrder, args, {loaders}) => loaders.ofbiz.load(`trackingCodeTypes/find?trackingCodeTypeId=${trackingCodeOrder.trackingCodeTypeId}`)
    },
    siteId: {type: GraphQLString},
    hasExported: {type: GraphQLBoolean},
    affiliateReferredTimeStamp: {type: GraphQLString},
    isBillable: {type: GraphQLBoolean}
  })
});

export {TrackingCodeOrderType};
    