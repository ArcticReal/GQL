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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../framework/helpTypes.js';


const createPaymentGatewayiDEAL = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayiDEAL method',
  args:{paymentGatewayiDEALToBeAdded: {type: PaymentGatewayiDEALInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayiDEALs/add?`, args.paymentGatewayiDEALToBeAdded, req);
  }
};
export {createPaymentGatewayiDEAL};


const updatePaymentGatewayiDEAL = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayiDEAL method',
  args:{paymentGatewayiDEALToBeUpdated: {type: PaymentGatewayiDEALInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayiDEALs/${args.nullVal}?`, args.paymentGatewayiDEALToBeUpdated, req);
  }
};
export {updatePaymentGatewayiDEAL};


const deletePaymentGatewayiDEALByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayiDEALByIdUpdated method',
  args:{paymentGatewayiDEALId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayiDEALs/${args.paymentGatewayiDEALId}?`, null, req);
  }
};
export {deletePaymentGatewayiDEALByIdUpdated};
