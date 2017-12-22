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
import {PaymentMethodInputType} from '../../accounting/PaymentMethod/PaymentMethodInputType.js';
import {PaymentMethodResponseType} from '../../accounting/PaymentMethod/PaymentMethodResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentMethod = {
  type: PaymentMethodResponseType,
  description: 'mutation for ofbiz createPaymentMethod method',
  args:{paymentMethodToBeAdded: {type: PaymentMethodInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentMethods/add?`, args.paymentMethodToBeAdded, req);
  }
};
export {createPaymentMethod};


const updatePaymentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentMethod method',
  args:{paymentMethodToBeUpdated: {type: PaymentMethodInputType},paymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentMethods/${args.paymentMethodId}?`, args.paymentMethodToBeUpdated, req);
  }
};
export {updatePaymentMethod};


const deletePaymentMethodByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentMethodByIdUpdated method',
  args:{paymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentMethods/${args.paymentMethodId}?`, null, req);
  }
};
export {deletePaymentMethodByIdUpdated};
