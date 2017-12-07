
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {TrackingCodeTypeType} from '../marketing/TrackingCodeTypeType.js';
import {TrackingCodeOrderType} from '../marketing/TrackingCodeOrderType.js';
import {TrackingCodeVisitType} from '../marketing/TrackingCodeVisitType.js';
import {MarketingCampaignType} from '../marketing/MarketingCampaignType.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturnType.js';


const TrackingCodeType = new GraphQLObjectType({
  name: 'TrackingCodeType',
  description: 'Type for TrackingCode in marketing',

  fields: () => ({
    trackingCodeId: {type: GraphQLString},
    trackableLifetime: {type: GraphQLInt},
    redirectUrl: {type: GraphQLString},
    comments: {type: GraphQLString},
    marketingCampaign: {
      type: MarketingCampaignType,
      args : {marketingCampaignId: {type: GraphQLString}},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbiz.load(`marketingCampaigns/find?marketingCampaignId=${trackingCode.marketingCampaignId}`)
    },
    lastModifiedDate: {type: GraphQLString},
    overrideLogo: {type: GraphQLString},
    groupId: {type: GraphQLString},
    description: {type: GraphQLString},
    billableLifetime: {type: GraphQLInt},
    thruDate: {type: GraphQLString},
    subgroupId: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    createdDate: {type: GraphQLString},
    trackingCodeType: {
      type: TrackingCodeTypeType,
      args : {trackingCodeTypeId: {type: GraphQLString}},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbiz.load(`trackingCodeTypes/find?trackingCodeTypeId=${trackingCode.trackingCodeTypeId}`)
    },
    overrideCss: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    trackingCodeVisit: {
      type: new GraphQLList(TrackingCodeVisitType),
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeVisits/find?trackingCodeId=${trackingCode.trackingCodeId}`)
    },
    trackingCodeOrderReturn: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?trackingCodeId=${trackingCode.trackingCodeId}`)
    },
    trackingCodeOrder: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {trackingCodeId: {type: GraphQLString}},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrders/find?trackingCodeId=${trackingCode.trackingCodeId}`)
    }
  })
});

export {TrackingCodeType};
    