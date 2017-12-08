
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

import {PaymentMethodTypeType} from '../accounting/PaymentMethodType.js';
import {PaymentApplicationType} from '../accounting/PaymentApplication.js';
import {PaymentBudgetAllocationType} from '../accounting/PaymentBudgetAllocation.js';
import {ReturnItemResponseType} from '../order/ReturnItemResponse.js';
import {PaymentGroupMemberType} from '../accounting/PaymentGroupMember.js';
import {PaymentAttributeType} from '../accounting/PaymentAttribute.js';
import {RoleTypeType} from '../party/RoleType.js';
import {FinAccountTransType} from '../accounting/FinAccountTrans.js';
import {DeductionType} from '../accounting/Deduction.js';
import {AcctgTransType} from '../accounting/AcctgTrans.js';
import {PerfReviewType} from '../humanres/PerfReview.js';
import {PaymentGatewayResponseType} from '../accounting/PaymentGatewayResponse.js';
import {GlAccountType} from '../accounting/GlAccount.js';
import {OrderPaymentPreferenceType} from '../order/OrderPaymentPreference.js';
import {PartyType} from '../party/Party.js';
import {PaymentContentType} from '../accounting/PaymentContent.js';
import {PaymentTypeType} from '../accounting/PaymentType.js';
import {PaymentMethodType} from '../accounting/PaymentMethod.js';


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
    paymentBudgetAllocations: {
      type: new GraphQLList(PaymentBudgetAllocationType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentBudgetAllocations/find?paymentId=${payment.paymentId}`)
    },
    perfReviews: {
      type: new GraphQLList(PerfReviewType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`perfReviews/find?paymentId=${payment.paymentId}`)
    },
    paymentApplications: {
      type: new GraphQLList(PaymentApplicationType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentApplications/find?paymentId=${payment.paymentId}`)
    },
    finAccountTranses: {
      type: new GraphQLList(FinAccountTransType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`finAccountTranss/find?paymentId=${payment.paymentId}`)
    },
    acctgTranses: {
      type: new GraphQLList(AcctgTransType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`acctgTranss/find?paymentId=${payment.paymentId}`)
    },
    deductions: {
      type: new GraphQLList(DeductionType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`deductions/find?paymentId=${payment.paymentId}`)
    },
    returnItemResponses: {
      type: new GraphQLList(ReturnItemResponseType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`returnItemResponses/find?paymentId=${payment.paymentId}`)
    },
    paymentGroupMembers: {
      type: new GraphQLList(PaymentGroupMemberType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentGroupMembers/find?paymentId=${payment.paymentId}`)
    },
    paymentAttributes: {
      type: new GraphQLList(PaymentAttributeType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentAttributes/find?paymentId=${payment.paymentId}`)
    },
    paymentContents: {
      type: new GraphQLList(PaymentContentType),
      args : {paymentId: {type: GraphQLString}},
      resolve: (payment, args, {loaders}) => loaders.ofbizArray.load(`paymentContents/find?paymentId=${payment.paymentId}`)
    }
  })
});

export {PaymentType};
    




const PaymentInputType = new GraphQLInputObjectType({
  name: 'PaymentInputType',
  description: 'input type for Payment in accounting',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    amount: {type: GraphQLFloat},
    paymentPreferenceId: {type: GraphQLString},
    comments: {type: GraphQLString},
    actualCurrencyAmount: {type: GraphQLFloat},
    overrideGlAccountId: {type: GraphQLString},
    paymentMethodTypeId: {type: GraphQLString},
    actualCurrencyUomId: {type: GraphQLString},
    paymentTypeId: {type: GraphQLString},
    currencyUomId: {type: GraphQLString},
    statusId: {type: GraphQLString},
    paymentId: {type: GraphQLString},
    paymentMethodId: {type: GraphQLString},
    paymentGatewayResponseId: {type: GraphQLString},
    paymentRefNum: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    effectiveDate: {type: GraphQLString}
  })
});

export {PaymentInputType};
    