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
import {PaymentGatewayClearCommerceResponseType} from '../../accounting/PaymentGatewayClearCommerce/PaymentGatewayClearCommerceResponseType.js';
import {PaymentGatewayClearCommerceInputType} from '../../accounting/PaymentGatewayClearCommerce/PaymentGatewayClearCommerceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayClearCommerce = {
  type: PaymentGatewayClearCommerceResponseType,
  description: 'mutation for ofbiz createPaymentGatewayClearCommerce method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayClearCommerces/add?`, null, req);
  }
};
export {createPaymentGatewayClearCommerce};


const updatePaymentGatewayClearCommerce = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayClearCommerce method',
  args:{paymentGatewayClearCommerceToBeUpdated: {type: PaymentGatewayClearCommerceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayClearCommerces/${args.nullVal}?`, args.paymentGatewayClearCommerceToBeUpdated, req);
  }
};
export {updatePaymentGatewayClearCommerce};


const deletePaymentGatewayClearCommerceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayClearCommerceByIdUpdated method',
  args:{paymentGatewayClearCommerceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayClearCommerces/${args.paymentGatewayClearCommerceId}?`, null, req);
  }
};
export {deletePaymentGatewayClearCommerceByIdUpdated};
