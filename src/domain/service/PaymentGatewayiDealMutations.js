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
import {PaymentGatewayiDEALInputType} from '../accounting/PaymentGatewayiDEAL/PaymentGatewayiDEALInputType.js';
import {PaymentGatewayiDEALResponseType} from '../accounting/PaymentGatewayiDEAL/PaymentGatewayiDEALResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createPaymentGatewayiDEAL = {
  type: PaymentGatewayiDEALResponseType,
  description: 'mutation for ofbiz createPaymentGatewayiDEAL method',
  args:{paymentGatewayiDEALToBeAdded: {type: PaymentGatewayiDEALInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayiDEALs/add?`, args.paymentGatewayiDEALToBeAdded, req);
  }
};
export {createPaymentGatewayiDEAL};


const updatePaymentGatewayiDEAL = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayiDEAL method',
  args:{paymentGatewayiDEALToBeUpdated: {type: PaymentGatewayiDEALInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayiDEALs/${args.nullVal}?`, args.paymentGatewayiDEALToBeUpdated, req);
  }
};
export {updatePaymentGatewayiDEAL};


const deletePaymentGatewayiDEALByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayiDEALByIdUpdated method',
  args:{paymentGatewayiDEALId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayiDEALs/${args.paymentGatewayiDEALId}?`, null, req);
  }
};
export {deletePaymentGatewayiDEALByIdUpdated};
