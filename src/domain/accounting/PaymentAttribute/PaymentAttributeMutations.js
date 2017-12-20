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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentAttributes/add?`, null, req);
  }
};
export {createPaymentAttribute};


const updatePaymentAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentAttribute method',
  args:{paymentAttributeToBeUpdated: {type: PaymentAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentAttributes/${args.attrName}?`, args.paymentAttributeToBeUpdated, req);
  }
};
export {updatePaymentAttribute};


const deletePaymentAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentAttributeByIdUpdated method',
  args:{paymentAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentAttributes/${args.paymentAttributeId}?`, null, req);
  }
};
export {deletePaymentAttributeByIdUpdated};
