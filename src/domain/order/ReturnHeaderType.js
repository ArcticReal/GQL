
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnItemType} from '../order/ReturnItemType.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustmentType.js';
import {ShipmentType} from '../shipment/ShipmentType.js';
import {ContactMechType} from '../party/ContactMechType.js';
import {ReturnHeaderTypeType} from '../order/ReturnHeaderTypeType.js';
import {ReturnContactMechType} from '../order/ReturnContactMechType.js';
import {ReturnItemBillingType} from '../order/ReturnItemBillingType.js';
import {FinAccountType} from '../accounting/FinAccountType.js';
import {PartyType} from '../party/PartyType.js';
import {ReturnItemShipmentType} from '../order/ReturnItemShipmentType.js';
import {BillingAccountType} from '../accounting/BillingAccountType.js';
import {ReturnStatusType} from '../order/ReturnStatusType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';
import {FacilityType} from '../product/FacilityType.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturnType.js';


const ReturnHeaderType = new GraphQLObjectType({
  name: 'ReturnHeaderType',
  description: 'Type for ReturnHeader in order',

  fields: () => ({
    fromParty: {
      type: PartyType,
      args : {fromPartyId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${returnHeader.fromPartyId}`)
    },
    entryDate: {type: GraphQLString},
    originContactMech: {
      type: ContactMechType,
      args : {originContactMechId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`contactMechs/find?contactMechId=${returnHeader.originContactMechId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`billingAccounts/find?billingAccountId=${returnHeader.billingAccountId}`)
    },
    returnHeaderType: {
      type: ReturnHeaderTypeType,
      args : {returnHeaderTypeId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`returnHeaderTypes/find?returnHeaderTypeId=${returnHeader.returnHeaderTypeId}`)
    },
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${returnHeader.finAccountId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${returnHeader.paymentMethodId}`)
    },
    needsInventoryReceive: {type: GraphQLBoolean},
    returnId: {type: GraphQLString},
    toParty: {
      type: PartyType,
      args : {toPartyId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${returnHeader.toPartyId}`)
    },
    destinationFacility: {
      type: FacilityType,
      args : {destinationFacilityId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`facilitys/find?facilityId=${returnHeader.destinationFacilityId}`)
    },
    supplierRmaId: {type: GraphQLString},
    shipment: {
      type: new GraphQLList(ShipmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?returnId=${returnHeader.returnId}`)
    },
    returnItem: {
      type: new GraphQLList(ReturnItemType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnId=${returnHeader.returnId}`)
    },
    returnStatus: {
      type: new GraphQLList(ReturnStatusType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnStatuss/find?returnId=${returnHeader.returnId}`)
    },
    returnItemShipment: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?returnId=${returnHeader.returnId}`)
    },
    returnItemBilling: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItemBillings/find?returnId=${returnHeader.returnId}`)
    },
    returnAdjustment: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?returnId=${returnHeader.returnId}`)
    },
    returnContactMech: {
      type: new GraphQLList(ReturnContactMechType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnContactMechs/find?returnId=${returnHeader.returnId}`)
    },
    trackingCodeOrderReturn: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?returnId=${returnHeader.returnId}`)
    }
  })
});

export {ReturnHeaderType};
    