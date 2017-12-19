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
import {PaymentMethodTypeInputType} from '../../accounting/PaymentMethodType/PaymentMethodTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentMethodType method',
  args:{paymentMethodTypeToBeAdded: {type: PaymentMethodTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentMethodTypes/add?`, args.paymentMethodTypeToBeAdded, req);
  }
};
export {createPaymentMethodType};


const updatePaymentMethodType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentMethodType method',
  args:{paymentMethodTypeToBeUpdated: {type: PaymentMethodTypeInputType},paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentMethodTypes/${args.paymentMethodTypeId}?`, args.paymentMethodTypeToBeUpdated, req);
  }
};
export {updatePaymentMethodType};


const deletePaymentMethodTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentMethodTypeByIdUpdated method',
  args:{paymentMethodTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentMethodTypes/${args.paymentMethodTypeId}?`, null, req);
  }
};
export {deletePaymentMethodTypeByIdUpdated};
