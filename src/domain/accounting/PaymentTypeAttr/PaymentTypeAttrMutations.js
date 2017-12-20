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
import {PaymentTypeAttrInputType} from '../../accounting/PaymentTypeAttr/PaymentTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentTypeAttr method',
  args:{paymentTypeAttrToBeAdded: {type: PaymentTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentTypeAttrs/add?`, args.paymentTypeAttrToBeAdded, req);
  }
};
export {createPaymentTypeAttr};


const updatePaymentTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentTypeAttr method',
  args:{paymentTypeAttrToBeUpdated: {type: PaymentTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentTypeAttrs/${args.attrName}?`, args.paymentTypeAttrToBeUpdated, req);
  }
};
export {updatePaymentTypeAttr};


const deletePaymentTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentTypeAttrByIdUpdated method',
  args:{paymentTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentTypeAttrs/${args.paymentTypeAttrId}?`, null, req);
  }
};
export {deletePaymentTypeAttrByIdUpdated};
