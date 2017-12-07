
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PostalAddressBoundaryType} from '../party/PostalAddressBoundaryType.js';
import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegmentType.js';
import {GiftCardType} from '../accounting/GiftCardType.js';
import {PayPalPaymentMethodType} from '../accounting/PayPalPaymentMethodType.js';
import {CheckAccountType} from '../accounting/CheckAccountType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroupType.js';
import {CreditCardType} from '../accounting/CreditCardType.js';
import {EftAccountType} from '../accounting/EftAccountType.js';


const PostalAddressType = new GraphQLObjectType({
  name: 'PostalAddressType',
  description: 'Type for PostalAddress in party',

  fields: () => ({
    countryGeoId: {type: GraphQLString},
    houseNumberExt: {type: GraphQLString},
    address2: {type: GraphQLString},
    city: {type: GraphQLString},
    address1: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    postalCodeGeoId: {type: GraphQLString},
    houseNumber: {type: GraphQLInt},
    postalCodeExt: {type: GraphQLString},
    contactMech: {
      type: ContactMechType,
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${postalAddress.contactMechId}`)
    },
    attnName: {type: GraphQLString},
    directions: {type: GraphQLString},
    countyGeoId: {type: GraphQLString},
    toName: {type: GraphQLString},
    cityGeoId: {type: GraphQLString},
    municipalityGeoId: {type: GraphQLString},
    stateProvinceGeoId: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    orderItemShipGroup: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?contactMechId=${postalAddress.contactMechId}`)
    },
    creditCard: {
      type: new GraphQLList(CreditCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`creditCards/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    checkAccount: {
      type: new GraphQLList(CheckAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`checkAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    eftAccount: {
      type: new GraphQLList(EftAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`eftAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    giftCard: {
      type: new GraphQLList(GiftCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`giftCards/find?contactMechId=${postalAddress.contactMechId}`)
    },
    payPalPaymentMethod: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`payPalPaymentMethods/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    billingAccount: {
      type: new GraphQLList(BillingAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`billingAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipmentRouteSegment: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    postalAddressBoundary: {
      type: new GraphQLList(PostalAddressBoundaryType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`postalAddressBoundarys/find?contactMechId=${postalAddress.contactMechId}`)
    }
  })
});

export {PostalAddressType};
    