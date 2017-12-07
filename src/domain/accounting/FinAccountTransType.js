
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {GlReconciliationType} from '../accounting/GlReconciliationType.js';
import {FinAccountType} from '../accounting/FinAccountType.js';
import {PaymentType} from '../accounting/PaymentType.js';
import {PartyType} from '../party/PartyType.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponseType.js';
import {FinAccountTransAttributeType} from '../accounting/FinAccountTransAttributeType.js';
import {OrderItemType} from '../order/OrderItemType.js';
import {FinAccountTransTypeType} from '../accounting/FinAccountTransTypeType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';


const FinAccountTransType = new GraphQLObjectType({
  name: 'FinAccountTransType',
  description: 'Type for FinAccountTrans in accounting',

  fields: () => ({
    finAccountTransId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    order: {
      type: OrderItemType,
      args : {orderId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`orderItems/find?orderId=${finAccountTrans.orderId}`)
    },
    glReconciliation: {
      type: GlReconciliationType,
      args : {glReconciliationId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`glReconciliations/find?glReconciliationId=${finAccountTrans.glReconciliationId}`)
    },
    transactionDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${finAccountTrans.finAccountId}`)
    },
    finAccountTransType: {
      type: FinAccountTransTypeType,
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`finAccountTransTypes/find?finAccountTransTypeId=${finAccountTrans.finAccountTransTypeId}`)
    },
    statusId: {type: GraphQLString},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`payments/find?paymentId=${finAccountTrans.paymentId}`)
    },
    performedByParty: {
      type: PartyType,
      args : {performedByPartyId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${finAccountTrans.performedByPartyId}`)
    },
    reasonEnumId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${finAccountTrans.partyId}`)
    },
    returnItemResponse: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    },
    finAccountTransAttribute: {
      type: new GraphQLList(FinAccountTransAttributeType),
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`finAccountTransAttributes/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    },
    payment: {
      type: new GraphQLList(PaymentType),
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`payments/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    }
  })
});

export {FinAccountTransType};
    