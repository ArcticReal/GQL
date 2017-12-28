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
import {PaymentGatewayConfigTypeInputType} from '../../accounting/PaymentGatewayConfigType/PaymentGatewayConfigTypeInputType.js';
import {PaymentGatewayConfigTypeResponseType} from '../../accounting/PaymentGatewayConfigType/PaymentGatewayConfigTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayConfigType = {
  type: PaymentGatewayConfigTypeResponseType,
  description: 'mutation for ofbiz createPaymentGatewayConfigType method',
  args:{paymentGatewayConfigTypeToBeAdded: {type: PaymentGatewayConfigTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayConfigTypes/add?`, args.paymentGatewayConfigTypeToBeAdded, req);
  }
};
export {createPaymentGatewayConfigType};


const updatePaymentGatewayConfigType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayConfigType method',
  args:{paymentGatewayConfigTypeToBeUpdated: {type: PaymentGatewayConfigTypeInputType},paymentGatewayConfigTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayConfigTypes/${args.paymentGatewayConfigTypeId}?`, args.paymentGatewayConfigTypeToBeUpdated, req);
  }
};
export {updatePaymentGatewayConfigType};


const deletePaymentGatewayConfigTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayConfigTypeByIdUpdated method',
  args:{paymentGatewayConfigTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayConfigTypes/${args.paymentGatewayConfigTypeId}?`, null, req);
  }
};
export {deletePaymentGatewayConfigTypeByIdUpdated};
