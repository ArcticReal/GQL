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
import {PaymentMethodTypeResponseType} from '../../accounting/PaymentMethodType/PaymentMethodTypeResponseType.js';
import {PaymentMethodTypeInputType} from '../../accounting/PaymentMethodType/PaymentMethodTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentMethodType = {
  type: PaymentMethodTypeResponseType,
  description: 'mutation for ofbiz createPaymentMethodType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentMethodTypes/add?`, null, req);
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
