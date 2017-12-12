
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

import {PostalAddressType} from '../party/PostalAddress.js';
import {PicklistItemType} from '../shipment/PicklistItem.js';
import {PartyRoleType} from '../party/PartyRole.js';
import {OrderHeaderType} from '../order/OrderHeader.js';
import {PartyType} from '../party/Party.js';
import {ShipmentMethodTypeType} from '../shipment/ShipmentMethodType.js';
import {TelecomNumberType} from '../party/TelecomNumber.js';
import {OrderItemShipGroupAssocType} from '../order/OrderItemShipGroupAssoc.js';
import {FacilityType} from '../product/Facility.js';
import {PicklistBinType} from '../shipment/PicklistBin.js';


const OrderItemShipGroupType = new GraphQLObjectType({
  name: 'OrderItemShipGroupType',
  description: 'Type for OrderItemShipGroup in order',

  fields: () => ({
    facility: {
      type: FacilityType,
      args : {facilityId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${orderItemShipGroup.facilityId}`)
    },
    giftMessage: {type: GraphQLString},
    order: {
      type: OrderHeaderType,
      args : {orderId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`order/orderHeaders/find?orderId=${orderItemShipGroup.orderId}`)
    },
    shippingInstructions: {type: GraphQLString},
    maySplit: {type: GraphQLBoolean},
    shipByDate: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    vendorParty: {
      type: PartyType,
      args : {vendorPartyId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${orderItemShipGroup.vendorPartyId}`)
    },
    contactMech: {
      type: PostalAddressType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`party/postalAddresss/find?contactMechId=${orderItemShipGroup.contactMechId}`)
    },
    telecomContactMech: {
      type: TelecomNumberType,
      args : {telecomContactMechId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`party/telecomNumbers/find?contactMechId=${orderItemShipGroup.telecomContactMechId}`)
    },
    shipAfterDate: {type: GraphQLString},
    carrierParty: {
      type: PartyRoleType,
      args : {carrierPartyId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${orderItemShipGroup.carrierPartyId}`)
    },
    carrierRoleTypeId: {type: GraphQLString},
    isGift: {type: GraphQLBoolean},
    estimatedShipDate: {type: GraphQLString},
    supplierParty: {
      type: PartyType,
      args : {supplierPartyId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${orderItemShipGroup.supplierPartyId}`)
    },
    shipmentMethodType: {
      type: ShipmentMethodTypeType,
      args : {shipmentMethodTypeId: {type: GraphQLString}},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentMethodTypes/find?shipmentMethodTypeId=${orderItemShipGroup.shipmentMethodTypeId}`)
    },
    trackingNumber: {type: GraphQLString},
    orderItemShipGroupAssocs: {
      type: new GraphQLList(OrderItemShipGroupAssocType),
      args : {},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroupAssocs/find?orderId=${orderItemShipGroup.orderId}`)
    },
    picklistBins: {
      type: new GraphQLList(PicklistBinType),
      args : {},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistBins/find?orderId=${orderItemShipGroup.orderId}`)
    },
    picklistItems: {
      type: new GraphQLList(PicklistItemType),
      args : {},
      resolve: (orderItemShipGroup, args, {loaders}) => loaders.ofbizArray.load(`shipment/picklist/picklistItems/find?orderId=${orderItemShipGroup.orderId}`)
    }
  })
});

export {OrderItemShipGroupType};
    




const OrderItemShipGroupInputType = new GraphQLInputObjectType({
  name: 'OrderItemShipGroupInputType',
  description: 'input type for OrderItemShipGroup in order',

  fields: () => ({
    facilityId: {type: GraphQLString},
    giftMessage: {type: GraphQLString},
    orderId: {type: GraphQLString},
    shippingInstructions: {type: GraphQLString},
    maySplit: {type: GraphQLBoolean},
    shipByDate: {type: GraphQLString},
    shipGroupSeqId: {type: GraphQLString},
    estimatedDeliveryDate: {type: GraphQLString},
    vendorPartyId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    telecomContactMechId: {type: GraphQLString},
    shipAfterDate: {type: GraphQLString},
    carrierPartyId: {type: GraphQLString},
    carrierRoleTypeId: {type: GraphQLString},
    isGift: {type: GraphQLBoolean},
    estimatedShipDate: {type: GraphQLString},
    supplierPartyId: {type: GraphQLString},
    shipmentMethodTypeId: {type: GraphQLString},
    trackingNumber: {type: GraphQLString}
  })
});

export {OrderItemShipGroupInputType};
    