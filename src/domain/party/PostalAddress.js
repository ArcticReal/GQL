
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
      resolve: (postalAddress, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${postalAddress.contactMechId}`)
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
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`order/orderItem/orderItemShipGroups/find?contactMechId=${postalAddress.contactMechId}`)
    },
    creditCards: {
      type: new GraphQLList(CreditCardType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`accounting/creditCards/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    shipmentRouteSegments: {
      type: new GraphQLList(ShipmentRouteSegmentType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`shipment/shipment/shipmentRouteSegments/find?contactMechId=${postalAddress.contactMechId}`)
    },
    checkAccounts: {
      type: new GraphQLList(CheckAccountType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`accounting/checkAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    eftAccounts: {
      type: new GraphQLList(EftAccountType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`accounting/eftAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    giftCards: {
      type: new GraphQLList(GiftCardType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`accounting/giftCards/find?contactMechId=${postalAddress.contactMechId}`)
    },
    payPalPaymentMethods: {
      type: new GraphQLList(PayPalPaymentMethodType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/payPalPaymentMethods/find?contactMechId=${postalAddress.contactMechId}`)
    },
    billingAccounts: {
      type: new GraphQLList(BillingAccountType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`accounting/billingAccounts/find?contactMechId=${postalAddress.contactMechId}`)
    },
    postalAddressBoundaries: {
      type: new GraphQLList(PostalAddressBoundaryType),
      args : {},
      resolve: (postalAddress, args, {loaders}) => loaders.ofbizArray.load(`party/postalAddress/postalAddressBoundarys/find?contactMechId=${postalAddress.contactMechId}`)
    }
  })
});

export {PostalAddressType};
    




const PostalAddressInputType = new GraphQLInputObjectType({
  name: 'PostalAddressInputType',
  description: 'input type for PostalAddress',

  fields: () => ({
    address1: {type: GraphQLString},
    address2: {type: GraphQLString},
    attnName: {type: GraphQLString},
    city: {type: GraphQLString},
    cityGeoId: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    countryGeoId: {type: GraphQLString},
    countyGeoId: {type: GraphQLString},
    directions: {type: GraphQLString},
    geoPointId: {type: GraphQLString},
    houseNumber: {type: GraphQLInt},
    houseNumberExt: {type: GraphQLString},
    municipalityGeoId: {type: GraphQLString},
    postalCode: {type: GraphQLString},
    postalCodeExt: {type: GraphQLString},
    postalCodeGeoId: {type: GraphQLString},
    stateProvinceGeoId: {type: GraphQLString},
    toName: {type: GraphQLString},
    valid: {type: GraphQLBoolean}
  })
});

export {PostalAddressInputType};
    