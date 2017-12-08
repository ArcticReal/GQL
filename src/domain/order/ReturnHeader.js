
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

import {ReturnItemType} from '../order/ReturnItem.js';
import {ReturnAdjustmentType} from '../order/ReturnAdjustment.js';
import {ShipmentType} from '../shipment/Shipment.js';
import {ContactMechType} from '../party/ContactMech.js';
import {ReturnHeaderTypeType} from '../order/ReturnHeaderType.js';
import {ReturnContactMechType} from '../order/ReturnContactMech.js';
import {ReturnItemBillingType} from '../order/ReturnItemBilling.js';
import {FinAccountType} from '../accounting/FinAccount.js';
import {PartyType} from '../party/Party.js';
import {ReturnItemShipmentType} from '../order/ReturnItemShipment.js';
import {BillingAccountType} from '../accounting/BillingAccount.js';
import {ReturnStatusType} from '../order/ReturnStatus.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';
import {FacilityType} from '../product/Facility.js';
import {TrackingCodeOrderReturnType} from '../marketing/TrackingCodeOrderReturn.js';


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
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`shipments/find?returnId=${returnHeader.returnId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItems/find?returnId=${returnHeader.returnId}`)
    },
    returnStatuses: {
      type: new GraphQLList(ReturnStatusType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnStatuss/find?returnId=${returnHeader.returnId}`)
    },
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItemShipments/find?returnId=${returnHeader.returnId}`)
    },
    returnItemBillings: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnItemBillings/find?returnId=${returnHeader.returnId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnAdjustments/find?returnId=${returnHeader.returnId}`)
    },
    returnContactMeches: {
      type: new GraphQLList(ReturnContactMechType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`returnContactMechs/find?returnId=${returnHeader.returnId}`)
    },
    trackingCodeOrderReturns: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {returnId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`trackingCodeOrderReturns/find?returnId=${returnHeader.returnId}`)
    }
  })
});

export {ReturnHeaderType};
    




const ReturnHeaderInputType = new GraphQLInputObjectType({
  name: 'ReturnHeaderInputType',
  description: 'input type for ReturnHeader in order',

  fields: () => ({
    fromPartyId: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    originContactMechId: {type: GraphQLString},
    billingAccountId: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    needsInventoryReceive: {type: GraphQLBoolean},
    returnId: {type: GraphQLString},
    toPartyId: {type: GraphQLString},
    destinationFacilityId: {type: GraphQLString},
    supplierRmaId: {type: GraphQLString}
  })
});

export {ReturnHeaderInputType};
    