
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PaymentMethodTypeType} from '../accounting/PaymentMethodTypeType.js';
import {PaymentApplicationType} from '../accounting/PaymentApplicationType.js';
import {PaymentBudgetAllocationType} from '../accounting/PaymentBudgetAllocationType.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponseType.js';
import {PaymentGroupMemberType} from '../accounting/PaymentGroupMemberType.js';
import {PaymentAttributeType} from '../accounting/PaymentAttributeType.js';
import {RoleTypeType} from '../party/RoleTypeType.js';
import {FinAccountTransType} from '../accounting/FinAccountTransType.js';
import {DeductionType} from '../accounting/DeductionType.js';
import {AcctgTransType} from '../accounting/AcctgTransType.js';
import {PerfReviewType} from '../humanres/PerfReviewType.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponseType.js';
import {GlAccountType} from '../accounting/GlAccountType.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreferenceType.js';
import {PartyType} from '../party/PartyType.js';
import {PaymentContentType} from '../accounting/PaymentContentType.js';
import {PaymentTypeType} from '../accounting/PaymentTypeType.js';
import {PaymentMethodType} from '../accounting/PaymentMethodType.js';


const PaymentType = new GraphQLObjectType({
  name: 'PaymentType',
  description: 'Type for Payment in accounting',

  fields: () => ({
    roleTypeTo: {
      type: RoleTypeType,
      args : {roleTypeIdTo: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`roleTypes/find?roleTypeId=${payment.roleTypeIdTo}`)
    },
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`finAccountTranss/find?finAccountTransId=${payment.finAccountTransId}`)
    },
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${payment.partyIdFrom}`)
    },
    amount: {type: GraphQLFloat},
    paymentPreference: {
      type: OrderPaymentPreferenceType,
      args : {paymentPreferenceId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`orderPaymentPreferences/find?orderPaymentPreferenceId=${payment.paymentPreferenceId}`)
    },
    comments: {type: GraphQLString},
    actualCurrencyAmount: {type: GraphQLFloat},
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`glAccounts/find?glAccountId=${payment.overrideGlAccountId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`paymentMethodTypes/find?paymentMethodTypeId=${payment.paymentMethodTypeId}`)
    },
    actualCurrencyUomId: {type: GraphQLString},
    paymentType: {
      type: PaymentTypeType,
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`paymentTypes/find?paymentTypeId=${payment.paymentTypeId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`paymentMethods/find?paymentMethodId=${payment.paymentMethodId}`)
    },
    paymentGatewayResponse: {
      type: PaymentGatewayResponseType,
      args : {paymentGatewayResponseId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`paymentGatewayResponses/find?paymentGatewayResponseId=${payment.paymentGatewayResponseId}`)
    },
    paymentRefNum: {type: GraphQLString},
    partyTo: {
      type: PartyType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${payment.partyIdTo}`)
    },
    effectiveDate: {type: GraphQLString},
    paymentBudgetAllocation: {
      type: new GraphQLList(PaymentBudgetAllocationType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentBudgetAllocations/find?paymentId=${payment.paymentId}`)
    },
    perfReview: {
      type: new GraphQLList(PerfReviewType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?paymentId=${payment.paymentId}`)
    },
    paymentApplication: {
      type: new GraphQLList(PaymentApplicationType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentApplications/find?paymentId=${payment.paymentId}`)
    },
    finAccountTrans: {
      type: new GraphQLList(FinAccountTransType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?paymentId=${payment.paymentId}`)
    },
    acctgTrans: {
      type: new GraphQLList(AcctgTransType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?paymentId=${payment.paymentId}`)
    },
    deduction: {
      type: new GraphQLList(DeductionType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`deductions/find?paymentId=${payment.paymentId}`)
    },
    returnItemResponse: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?paymentId=${payment.paymentId}`)
    },
    paymentGroupMember: {
      type: new GraphQLList(PaymentGroupMemberType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentGroupMembers/find?paymentId=${payment.paymentId}`)
    },
    paymentAttribute: {
      type: new GraphQLList(PaymentAttributeType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentAttributes/find?paymentId=${payment.paymentId}`)
    },
    paymentContent: {
      type: new GraphQLList(PaymentContentType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentContents/find?paymentId=${payment.paymentId}`)
    }
  })
});

export {PaymentType};
    