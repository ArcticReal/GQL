
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
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    },
    trackingCodes: {
      type: new GraphQLList(TrackingCodeType),
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`trackingCodes/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    },
    trackingCodeOrders: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCodeType, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrders/find?trackingCodeTypeId=${trackingCodeType.trackingCodeTypeId}`)
    }
  })
});

export {TrackingCodeTypeType};
    




const TrackingCodeTypeInputType = new GraphQLInputObjectType({
  name: 'TrackingCodeTypeInputType',
  description: 'input type for TrackingCodeType in marketing',

  fields: () => ({
    trackingCodeTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {TrackingCodeTypeInputType};
    