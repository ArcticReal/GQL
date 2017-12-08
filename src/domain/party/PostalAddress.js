
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

import {PostalAddressBoundaryType} from '../party/PostalAddressBoundary.js';
import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';
import {GiftCardType} from '../accounting/GiftCard.js';
import {PayPalPaymentMethodType} from '../accounting/PayPalPaymentMethod.js';
import {CheckAccountType} from '../accounting/CheckAccount.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {ContactMechType} from '../party/ContactMech.js';
import {OrderItemShipGroupType} from '../order/OrderItemShipGroup.js';
import {CreditCardType} from '../accounting/CreditCard.js';
import {EftAccountType} from '../accounting/EftAccount.js';


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
    orderItemShipGroups: {
      type: new GraphQLList(OrderItemShipGroupType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`orderItemShipGroups/find?contactMechId=${postalAddress.contactMechId}`)
    },
    creditCards: {
      type: new GraphQLList(CreditCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`creditCards/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipmentRouteSegments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    checkAccounts: {
      type: new GraphQLList(CheckAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`checkAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    eftAccounts: {
      type: new GraphQLList(EftAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`eftAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    giftCards: {
      type: new GraphQLList(GiftCardType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`giftCards/find?contactMechId=${postalAddress.contactMechId}`)
    },
    payPalPaymentMethods: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`payPalPaymentMethods/find?contactMechId=${postalAddress.contactMechId}`)
    },
    billingAccounts: {
      type: new GraphQLList(BillingAccountType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`billingAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    postalAddressBoundaries: {
      type: new GraphQLList(PostalAddressBoundaryType),
      args : {contactMechId: {type: GraphQLString}},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`postalAddressBoundarys/find?contactMechId=${postalAddress.contactMechId}`)
    }
  })
});

export {PostalAddressType};
    




const PostalAddressInputType = new GraphQLInputObjectType({
  name: 'PostalAddressInputType',
  description: 'input type for PostalAddress in party',

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
    contactMechId: {type: GraphQLString},
    attnName: {type: GraphQLString},
    directions: {type: GraphQLString},
    countyGeoId: {type: GraphQLString},
    toName: {type: GraphQLString},
    cityGeoId: {type: GraphQLString},
    municipalityGeoId: {type: GraphQLString},
    stateProvinceGeoId: {type: GraphQLString},
    geoPointId: {type: GraphQLString}
  })
});

export {PostalAddressInputType};
    