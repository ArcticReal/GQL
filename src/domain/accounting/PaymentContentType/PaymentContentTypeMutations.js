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
import {PaymentContentTypeResponseType} from '../../accounting/PaymentContentType/PaymentContentTypeResponseType.js';
import {PaymentContentTypeInputType} from '../../accounting/PaymentContentType/PaymentContentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentContentType = {
  type: PaymentContentTypeResponseType,
  description: 'mutation for ofbiz createPaymentContentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentContentTypes/add?`, null, req);
  }
};
export {createPaymentContentType};


const updatePaymentContentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentContentType method',
  args:{paymentContentTypeToBeUpdated: {type: PaymentContentTypeInputType},paymentContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentContentTypes/${args.paymentContentTypeId}?`, args.paymentContentTypeToBeUpdated, req);
  }
};
export {updatePaymentContentType};


const deletePaymentContentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentContentTypeByIdUpdated method',
  args:{paymentContentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentContentTypes/${args.paymentContentTypeId}?`, null, req);
  }
};
export {deletePaymentContentTypeByIdUpdated};
