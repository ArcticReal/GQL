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
import {PaymentGroupMemberInputType} from '../../accounting/PaymentGroupMember/PaymentGroupMemberInputType.js';
import {PaymentGroupMemberResponseType} from '../../accounting/PaymentGroupMember/PaymentGroupMemberResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGroupMember = {
  type: PaymentGroupMemberResponseType,
  description: 'mutation for ofbiz createPaymentGroupMember method',
  args:{paymentGroupMemberToBeAdded: {type: PaymentGroupMemberInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGroupMembers/add?`, args.paymentGroupMemberToBeAdded, req);
  }
};
export {createPaymentGroupMember};


const updatePaymentGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGroupMember method',
  args:{paymentGroupMemberToBeUpdated: {type: PaymentGroupMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGroupMembers/${args.nullVal}?`, args.paymentGroupMemberToBeUpdated, req);
  }
};
export {updatePaymentGroupMember};


const deletePaymentGroupMemberByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGroupMemberByIdUpdated method',
  args:{paymentGroupMemberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGroupMembers/${args.paymentGroupMemberId}?`, null, req);
  }
};
export {deletePaymentGroupMemberByIdUpdated};
