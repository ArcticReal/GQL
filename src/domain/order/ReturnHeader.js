
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
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${returnHeader.fromPartyId}`)
    },
    entryDate: {type: GraphQLString},
    originContactMech: {
      type: ContactMechType,
      args : {originContactMechId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`party/contactMechs/find?contactMechId=${returnHeader.originContactMechId}`)
    },
    billingAccount: {
      type: BillingAccountType,
      args : {billingAccountId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`accounting/billingAccounts/find?billingAccountId=${returnHeader.billingAccountId}`)
    },
    returnHeaderType: {
      type: ReturnHeaderTypeType,
      args : {returnHeaderTypeId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`order/returnHeader/returnHeaderTypes/find?returnHeaderTypeId=${returnHeader.returnHeaderTypeId}`)
    },
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${returnHeader.finAccountId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${returnHeader.paymentMethodId}`)
    },
    needsInventoryReceive: {type: GraphQLBoolean},
    returnId: {type: GraphQLString},
    toParty: {
      type: PartyType,
      args : {toPartyId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${returnHeader.toPartyId}`)
    },
    destinationFacility: {
      type: FacilityType,
      args : {destinationFacilityId: {type: GraphQLString}},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbiz.load(`product/facilitys/find?facilityId=${returnHeader.destinationFacilityId}`)
    },
    supplierRmaId: {type: GraphQLString},
    shipments: {
      type: new GraphQLList(ShipmentType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`/shipments/find?returnId=${returnHeader.returnId}`)
    },
    returnItems: {
      type: new GraphQLList(ReturnItemType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnItems/find?returnId=${returnHeader.returnId}`)
    },
    returnStatuses: {
      type: new GraphQLList(ReturnStatusType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnStatuss/find?returnId=${returnHeader.returnId}`)
    },
    returnItemShipments: {
      type: new GraphQLList(ReturnItemShipmentType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemShipments/find?returnId=${returnHeader.returnId}`)
    },
    returnItemBillings: {
      type: new GraphQLList(ReturnItemBillingType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemBillings/find?returnId=${returnHeader.returnId}`)
    },
    returnAdjustments: {
      type: new GraphQLList(ReturnAdjustmentType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnAdjustments/find?returnId=${returnHeader.returnId}`)
    },
    returnContactMeches: {
      type: new GraphQLList(ReturnContactMechType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`order/returnContactMechs/find?returnId=${returnHeader.returnId}`)
    },
    trackingCodeOrderReturns: {
      type: new GraphQLList(TrackingCodeOrderReturnType),
      args : {},
      resolve: (returnHeader, args, {loaders}) => loaders.ofbizArray.load(`marketing/trackingCode/trackingCodeOrderReturns/find?returnId=${returnHeader.returnId}`)
    }
  })
});

export {ReturnHeaderType};
    




const ReturnHeaderInputType = new GraphQLInputObjectType({
  name: 'ReturnHeaderInputType',
  description: 'input type for ReturnHeader',

  fields: () => ({
    billingAccountId: {type: GraphQLString},
    createdBy: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    destinationFacilityId: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    fromPartyId: {type: GraphQLString},
    needsInventoryReceive: {type: GraphQLBoolean},
    originContactMechId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    supplierRmaId: {type: GraphQLString},
    toPartyId: {type: GraphQLString}
  })
});

export {ReturnHeaderInputType};
    