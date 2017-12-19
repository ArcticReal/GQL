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
import {PayPalPaymentMethodInputType} from '../../accounting/PayPalPaymentMethod/PayPalPaymentMethodInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPayPalPaymentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPayPalPaymentMethod method',
  args:{payPalPaymentMethodToBeAdded: {type: PayPalPaymentMethodInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/payPalPaymentMethods/add?`, args.payPalPaymentMethodToBeAdded, req);
  }
};
export {createPayPalPaymentMethod};


const updatePayPalPaymentMethod = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePayPalPaymentMethod method',
  args:{payPalPaymentMethodToBeUpdated: {type: PayPalPaymentMethodInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/payPalPaymentMethods/${args.nullVal}?`, args.payPalPaymentMethodToBeUpdated, req);
  }
};
export {updatePayPalPaymentMethod};


const deletePayPalPaymentMethodByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePayPalPaymentMethodByIdUpdated method',
  args:{payPalPaymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/payPalPaymentMethods/${args.payPalPaymentMethodId}?`, null, req);
  }
};
export {deletePayPalPaymentMethodByIdUpdated};
