
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

import {TrackingCodeTypeType} from '../../marketing/TrackingCodeType/TrackingCodeTypeType.js';
import {TrackingCodeOrderType} from '../../marketing/TrackingCodeOrder/TrackingCodeOrderType.js';
import {TrackingCodeVisitType} from '../../marketing/TrackingCodeVisit/TrackingCodeVisitType.js';
import {MarketingCampaignType} from '../../marketing/MarketingCampaign/MarketingCampaignType.js';
import {TrackingCodeOrderReturnType} from '../../marketing/TrackingCodeOrderReturn/TrackingCodeOrderReturnType.js';


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
      resolve: (trackingCode, args, {loaders}) => loaders.ofbiz.load(`marketing/marketingCampaigns/find?marketingCampaignId=${trackingCode.marketingCampaignId}`)
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
      resolve: (trackingCode, args, {loaders}) => loaders.ofbiz.load(`marketing/trackingCode/trackingCodeTypes/find?trackingCodeTypeId=${trackingCode.trackingCodeTypeId}`)
    },
    overrideCss: {type: GraphQLString},
    createdByUserLogin: {type: GraphQLString},
    prodCatalogId: {type: GraphQLString},
    trackingCodeVisits: {
      type: new GraphQLList(TrackingCodeVisitType),
      args : {},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeVisits/find?trackingCodeId=${trackingCode.trackingCodeId}`)
    },
    trackingCodeOrderReturns: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrderReturns/find?trackingCodeId=${trackingCode.trackingCodeId}`)
    },
    trackingCodeOrders: {
      type: new GraphQLList(TrackingCodeOrderType),
      args : {},
      resolve: (trackingCode, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrders/find?trackingCodeId=${trackingCode.trackingCodeId}`)
    }
  })
});

export {TrackingCodeType};
    