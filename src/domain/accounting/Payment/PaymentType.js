
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

import {PaymentMethodTypeType} from '../../accounting/PaymentMethodType/PaymentMethodTypeType.js';
import {PaymentApplicationType} from '../../accounting/PaymentApplication/PaymentApplicationType.js';
import {PaymentBudgetAllocationType} from '../../accounting/PaymentBudgetAllocation/PaymentBudgetAllocationType.js';
import {ReturnItemResponseType} from '../../order/ReturnItemResponse/ReturnItemResponseType.js';
import {PaymentGroupMemberType} from '../../accounting/PaymentGroupMember/PaymentGroupMemberType.js';
import {PaymentAttributeType} from '../../accounting/PaymentAttribute/PaymentAttributeType.js';
import {RoleTypeType} from '../../party/RoleType/RoleTypeType.js';
import {FinAccountTransType} from '../../accounting/FinAccountTrans/FinAccountTransType.js';
import {DeductionType} from '../../accounting/Deduction/DeductionType.js';
import {AcctgTransType} from '../../accounting/AcctgTrans/AcctgTransType.js';
import {PerfReviewType} from '../../humanres/PerfReview/PerfReviewType.js';
import {PaymentGatewayResponseType} from '../../accounting/PaymentGatewayResponse/PaymentGatewayResponseType.js';
import {GlAccountType} from '../../accounting/GlAccount/GlAccountType.js';
import {OrderPaymentPreferenceType} from '../../order/OrderPaymentPreference/OrderPaymentPreferenceType.js';
import {PartyType} from '../../party/Party/PartyType.js';
import {PaymentContentType} from '../../accounting/PaymentContent/PaymentContentType.js';
import {PaymentTypeType} from '../../accounting/PaymentType/PaymentTypeType.js';
import {PaymentMethodType} from '../../accounting/PaymentMethod/PaymentMethodType.js';


const PaymentType = new GraphQLObjectType({
  name: 'PaymentType',
  description: 'Type for Payment in accounting',

  fields: () => ({
    roleTypeTo: {
      type: RoleTypeType,
      args : {roleTypeIdTo: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`party/roleTypes/find?roleTypeId=${payment.roleTypeIdTo}`)
    },
    finAccountTrans: {
      type: FinAccountTransType,
      args : {finAccountTransId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`accounting/finAccount/finAccountTranss/find?finAccountTransId=${payment.finAccountTransId}`)
    },
    partyFrom: {
      type: PartyType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${payment.partyIdFrom}`)
    },
    amount: {type: GraphQLFloat},
    paymentPreference: {
      type: OrderPaymentPreferenceType,
      args : {paymentPreferenceId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`order/orderPaymentPreferences/find?orderPaymentPreferenceId=${payment.paymentPreferenceId}`)
    },
    comments: {type: GraphQLString},
    actualCurrencyAmount: {type: GraphQLFloat},
    overrideGlAccount: {
      type: GlAccountType,
      args : {overrideGlAccountId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`accounting/glAccounts/find?glAccountId=${payment.overrideGlAccountId}`)
    },
    paymentMethodType: {
      type: PaymentMethodTypeType,
      args : {paymentMethodTypeId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethodTypes/find?paymentMethodTypeId=${payment.paymentMethodTypeId}`)
    },
    actualCurrencyUomId: {type: GraphQLString},
    paymentType: {
      type: PaymentTypeType,
      args : {paymentTypeId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentTypes/find?paymentTypeId=${payment.paymentTypeId}`)
    },
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    paymentMethod: {
      type: PaymentMethodType,
      args : {paymentMethodId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentMethods/find?paymentMethodId=${payment.paymentMethodId}`)
    },
    paymentGatewayResponse: {
      type: PaymentGatewayResponseType,
      args : {paymentGatewayResponseId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`accounting/payment/paymentGatewayResponses/find?paymentGatewayResponseId=${payment.paymentGatewayResponseId}`)
    },
    paymentRefNum: {type: GraphQLString},
    partyTo: {
      type: PartyType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${payment.partyIdTo}`)
    },
    effectiveDate: {type: GraphQLString},
    paymentBudgetAllocations: {
      type: new GraphQLList(PaymentBudgetAllocationType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/budget/paymentBudgetAllocations/find?paymentId=${payment.paymentId}`)
    },
    perfReviews: {
      type: new GraphQLList(PerfReviewType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`humanres/perfReviews/find?paymentId=${payment.paymentId}`)
    },
    paymentApplications: {
      type: new GraphQLList(PaymentApplicationType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentApplications/find?paymentId=${payment.paymentId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/finAccount/finAccountTranss/find?paymentId=${payment.paymentId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/acctgTranss/find?paymentId=${payment.paymentId}`)
    },
    deductions: {
      type: new GraphQLList(DeductionType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/deductions/find?paymentId=${payment.paymentId}`)
    },
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`order/returnItem/returnItemResponses/find?paymentId=${payment.paymentId}`)
    },
    paymentGroupMembers: {
      type: new GraphQLList(PaymentGroupMemberType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentGroupMembers/find?paymentId=${payment.paymentId}`)
    },
    paymentAttributes: {
      type: new GraphQLList(PaymentAttributeType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentAttributes/find?paymentId=${payment.paymentId}`)
    },
    paymentContents: {
      type: new GraphQLList(PaymentContentType),
      args : {},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`accounting/payment/paymentContents/find?paymentId=${payment.paymentId}`)
    }
  })
});

export {PaymentType};
    