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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentMethod = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentMethod method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentMethods/add?`, null, req);
  }
};
export {createPaymentMethod};


const updatePaymentMethod = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentMethod method',
  args:{paymentMethodToBeUpdated: {type: PaymentMethodInputType},paymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentMethods/${args.paymentMethodId}?`, args.paymentMethodToBeUpdated, req);
  }
};
export {updatePaymentMethod};


const deletePaymentMethodByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentMethodByIdUpdated method',
  args:{paymentMethodId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentMethods/${args.paymentMethodId}?`, null, req);
  }
};
export {deletePaymentMethodByIdUpdated};
