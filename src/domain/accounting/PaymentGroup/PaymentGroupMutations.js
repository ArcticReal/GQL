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
import {PaymentGroupInputType} from '../../accounting/PaymentGroup/PaymentGroupInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentGroup method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGroups/add?`, null, req);
  }
};
export {createPaymentGroup};


const updatePaymentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGroup method',
  args:{paymentGroupToBeUpdated: {type: PaymentGroupInputType},paymentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGroups/${args.paymentGroupId}?`, args.paymentGroupToBeUpdated, req);
  }
};
export {updatePaymentGroup};


const deletePaymentGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGroupByIdUpdated method',
  args:{paymentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGroups/${args.paymentGroupId}?`, null, req);
  }
};
export {deletePaymentGroupByIdUpdated};
