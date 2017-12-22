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
import {PaymentMethodTypeGlAccountInputType} from '../../accounting/PaymentMethodTypeGlAccount/PaymentMethodTypeGlAccountInputType.js';
import {PaymentMethodTypeGlAccountResponseType} from '../../accounting/PaymentMethodTypeGlAccount/PaymentMethodTypeGlAccountResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentMethodTypeGlAccount = {
  type: PaymentMethodTypeGlAccountResponseType,
  description: 'mutation for ofbiz createPaymentMethodTypeGlAccount method',
  args:{paymentMethodTypeGlAccountToBeAdded: {type: PaymentMethodTypeGlAccountInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/paymentMethodTypeGlAccounts/add?`, args.paymentMethodTypeGlAccountToBeAdded, req);
  }
};
export {createPaymentMethodTypeGlAccount};


const updatePaymentMethodTypeGlAccount = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentMethodTypeGlAccount method',
  args:{paymentMethodTypeGlAccountToBeUpdated: {type: PaymentMethodTypeGlAccountInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/paymentMethodTypeGlAccounts/${args.nullVal}?`, args.paymentMethodTypeGlAccountToBeUpdated, req);
  }
};
export {updatePaymentMethodTypeGlAccount};


const deletePaymentMethodTypeGlAccountByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentMethodTypeGlAccountByIdUpdated method',
  args:{paymentMethodTypeGlAccountId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/paymentMethodTypeGlAccounts/${args.paymentMethodTypeGlAccountId}?`, null, req);
  }
};
export {deletePaymentMethodTypeGlAccountByIdUpdated};
