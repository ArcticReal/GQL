
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

import {TrackingCodeOrderType} from '../../marketing/TrackingCodeOrder/TrackingCodeOrderType.js';
import {TrackingCodeOrderReturnType} from '../../marketing/TrackingCodeOrderReturn/TrackingCodeOrderReturnType.js';
import {TrackingCodeType} from '../../marketing/TrackingCode/TrackingCodeType.js';


const TrackingCodeTypeType = new GraphQLObjectType({
  name: 'TrackingCodeTypeType',
  description: 'Type for TrackingCodeType in marketing',

  fields: () => ({
    trackingCodeTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    trackingCodeOrderReturns: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrderReturns/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    },
    trackingCodes: {
      type: new GraphQLList(TrackingCodeType),
      args : {},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCodes/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    },
    trackingCodeOrders: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrders/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    }
  })
});

export {TrackingCodeTypeType};
    