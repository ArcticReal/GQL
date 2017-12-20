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
import {PaymentGatewayClearCommerceInputType} from '../../accounting/PaymentGatewayClearCommerce/PaymentGatewayClearCommerceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayClearCommerce = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayClearCommerce method',
  args:{paymentGatewayClearCommerceToBeAdded: {type: PaymentGatewayClearCommerceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayClearCommerces/add?`, args.paymentGatewayClearCommerceToBeAdded, req);
  }
};
export {createPaymentGatewayClearCommerce};


const updatePaymentGatewayClearCommerce = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayClearCommerce method',
  args:{paymentGatewayClearCommerceToBeUpdated: {type: PaymentGatewayClearCommerceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayClearCommerces/${args.nullVal}?`, args.paymentGatewayClearCommerceToBeUpdated, req);
  }
};
export {updatePaymentGatewayClearCommerce};


const deletePaymentGatewayClearCommerceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayClearCommerceByIdUpdated method',
  args:{paymentGatewayClearCommerceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayClearCommerces/${args.paymentGatewayClearCommerceId}?`, null, req);
  }
};
export {deletePaymentGatewayClearCommerceByIdUpdated};
