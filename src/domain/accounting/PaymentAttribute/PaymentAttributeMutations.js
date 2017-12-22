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
import {PaymentAttributeInputType} from '../../accounting/PaymentAttribute/PaymentAttributeInputType.js';
import {PaymentAttributeResponseType} from '../../accounting/PaymentAttribute/PaymentAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentAttribute = {
  type: PaymentAttributeResponseType,
  description: 'mutation for ofbiz createPaymentAttribute method',
  args:{paymentAttributeToBeAdded: {type: PaymentAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentAttributes/add?`, args.paymentAttributeToBeAdded, req);
  }
};
export {createPaymentAttribute};


const updatePaymentAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentAttribute method',
  args:{paymentAttributeToBeUpdated: {type: PaymentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentAttributes/${args.attrName}?`, args.paymentAttributeToBeUpdated, req);
  }
};
export {updatePaymentAttribute};


const deletePaymentAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentAttributeByIdUpdated method',
  args:{paymentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentAttributes/${args.paymentAttributeId}?`, null, req);
  }
};
export {deletePaymentAttributeByIdUpdated};
