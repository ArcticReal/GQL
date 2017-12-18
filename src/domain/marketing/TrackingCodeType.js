
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

import {TrackingCodeOrderType} from '../marketing/TrackingCodeOrder.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturn.js';
import {TrackingCodeType} from '../marketing/TrackingCode.js';


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
    




const TrackingCodeTypeInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeTypeInputType',
  description: 'input type for TrackingCodeType',

  fields: () => ({
    description: {type: GraphQLString},
    trackingCodeTypeId: {type: GraphQLString}
  })
});

export {TrackingCodeTypeInputType};
    