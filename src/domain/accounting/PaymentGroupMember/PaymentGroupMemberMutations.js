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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentGroupMember method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGroupMembers/add?`, null, req);
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
