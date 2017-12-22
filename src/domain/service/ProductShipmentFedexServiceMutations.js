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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const fedexShipRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz fedexShipRequest method',
  args:{shipmentRouteSegmentId: {type: GraphQLString},shipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentFedex/fedexShipRequest?shipmentRouteSegmentId=${args.shipmentRouteSegmentId}shipmentId=${args.shipmentId}`, null, req);
  }
};
export {fedexShipRequest};


const fedexSubscriptionRequest = {
  type: ResponseType,
  description: 'mutation for ofbiz fedexSubscriptionRequest method',
  args:{companyPartyId: {type: GraphQLString},replaceMeterNumber: {type: GraphQLBoolean},shipmentGatewayConfigId: {type: GraphQLString},configProps: {type: GraphQLString},contactPartyName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productShipmentFedex/fedexSubscriptionRequest?companyPartyId=${args.companyPartyId}replaceMeterNumber=${args.replaceMeterNumber}shipmentGatewayConfigId=${args.shipmentGatewayConfigId}configProps=${args.configProps}contactPartyName=${args.contactPartyName}`, null, req);
  }
};
export {fedexSubscriptionRequest};
