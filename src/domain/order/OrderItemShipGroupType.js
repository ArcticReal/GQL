
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PostalAddressType} from '../party/PostalAddressType.js';
import {PicklistItemType} from '../shipment/PicklistItemType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';
import {OrderHeaderType} from '../order/OrderHeaderType.js';
import {PartyType} from '../party/PartyType.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodTypeType.js';
import {TelecomNumberType} from '../party/TelecomNumberType.js';
import {OrderItemShipGroupAssocType} from '../order/OrderItemShipGroupAssocType.js';
import {FacilityType} from '../product/FacilityType.js';
import {PicklistBinType} from '../shipment/PicklistBinType.js';


const OrderItemShipGroupType = new GraphQLObjectType({
  name: 'OrderItemShipGroupType',
  description: 'Type for OrderItemShipGroup in order',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${orderItemShipGroup.facilityId}`)
    },
    giftMessage: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`orderHeaders/find?orderId=${orderItemShipGroup.orderId}`)
    },
    shippingInstructions: {type: GraphQLString},
    maySplit: {type: GraphQLBoolean},
    shipByDate: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${orderItemShipGroup.vendorPartyId}`)
    },
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`postalAddresss/find?contactMechId=${orderItemShipGroup.contactMechId}`)
    },
    telecomContactMech: {
      type: TelecomNumberType,
      args : {telecomContactMechId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`telecomNumbers/find?contactMechId=${orderItemShipGroup.telecomContactMechId}`)
    },
    shipAfterDate: {type: GraphQLString},
    carrierParty: {
      type: PartyRoleType,
      args : {carrierPartyId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${orderItemShipGroup.carrierPartyId}`)
    },
    carrierRoleTypeId: {type: GraphQLString},
    isGift: {type: GraphQLBoolean},
    estimatedShipDate: {type: GraphQLString},
    supplierParty: {
      type: PartyType,
      args : {supplierPartyId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${orderItemShipGroup.supplierPartyId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`shipmentMethodTypes/find?shipmentMethodTypeId=${orderItemShipGroup.shipmentMethodTypeId}`)
    },
    trackingNumber: {type: GraphQLString},
    orderItemShipGroupAssoc: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroupAssocs/find?orderId=${orderItemShipGroup.orderId}`)
    },
    picklistBin: {
      type: new GraphQLList(PicklistBinType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbizArray.load(`picklistBins/find?orderId=${orderItemShipGroup.orderId}`)
    },
    picklistItem: {
      type: new GraphQLList(PicklistItemType),
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbizArray.load(`picklistItems/find?orderId=${orderItemShipGroup.orderId}`)
    }
  })
});

export {OrderItemShipGroupType};
    