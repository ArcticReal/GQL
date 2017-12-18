
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

import {GlReconciliationType} from '../accounting/GlReconciliation.js';
import {FinAccountType} from '../accounting/FinAccount.js';
import {PaymentType} from '../accounting/Payment.js';
import {PartyType} from '../party/Party.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponse.js';
import {FinAccountTransAttributeType} from '../accounting/FinAccountTransAttribute.js';
import {OrderItemType} from '../order/OrderItem.js';
import {FinAccountTransTypeType} from '../accounting/FinAccountTransType.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';


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
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`order/orderItems/find?orderId=${finAccountTrans.orderId}`)
    },
    glReconciliation: {
      type: GlReconciliationType,
      args : {glReconciliationId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/glReconciliations/find?glReconciliationId=${finAccountTrans.glReconciliationId}`)
    },
    transactionDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccounts/find?finAccountId=${finAccountTrans.finAccountId}`)
    },
    finAccountTransType: {
      type: FinAccountTransTypeType,
      args : {finAccountTransTypeId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTransTypes/find?finAccountTransTypeId=${finAccountTrans.finAccountTransTypeId}`)
    },
    statusId: {type: GraphQLString},
    payment: {
      type: PaymentType,
      args : {paymentId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`accounting/payments/find?paymentId=${finAccountTrans.paymentId}`)
    },
    performedByParty: {
      type: PartyType,
      args : {performedByPartyId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${finAccountTrans.performedByPartyId}`)
    },
    reasonEnumId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${finAccountTrans.partyId}`)
    },
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemResponses/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    },
    finAccountTransAttributes: {
      type: new GraphQLList(FinAccountTransAttributeType),
      args : {},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTransAttributes/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    },
    payments: {
      type: new GraphQLList(PaymentType),
      args : {},
      resolve: (finAccountTrans, args, {loaders}) => loaders.ofbizArray.load(`accounting/payments/find?finAccountTransId=${finAccountTrans.finAccountTransId}`)
    }
  })
});

export {FinAccountTransType};
    




const FinAccountTransInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransInputType',
  description: 'input type for FinAccountTrans',

  fields: () => ({
    amount: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    entryDate: {type: GraphQLString},
    finAccountId: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    finAccountTransTypeId: {type: GraphQLString},
    glReconciliationId: {type: GraphQLString},
    orderId: {type: GraphQLString},
    orderItemSeqId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    performedByPartyId: {type: GraphQLString},
    reasonEnumId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    transactionDate: {type: GraphQLString}
  })
});

export {FinAccountTransInputType};
    