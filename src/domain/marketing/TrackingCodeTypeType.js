
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TrackingCodeOrderType} from '../marketing/TrackingCodeOrderType.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturnType.js';
import {TrackingCodeType} from '../marketing/TrackingCodeType.js';


const TrackingCodeTypeType = new GraphQLObjectType({
  name: 'TrackingCodeTypeType',
  description: 'Type for TrackingCodeType in marketing',

  fields: () => ({
    trackingCodeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    trackingCodeOrderReturn: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    },
    trackingCode: {
      type: new GraphQLList(TrackingCodeType),
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`trackingCodes/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    },
    trackingCodeOrder: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrders/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    }
  })
});

export {TrackingCodeTypeType};
    