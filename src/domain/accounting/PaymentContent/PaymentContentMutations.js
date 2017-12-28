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
import {PaymentContentInputType} from '../../accounting/PaymentContent/PaymentContentInputType.js';
import {PaymentContentResponseType} from '../../accounting/PaymentContent/PaymentContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentContent = {
  type: PaymentContentResponseType,
  description: 'mutation for ofbiz createPaymentContent method',
  args:{paymentContentToBeAdded: {type: PaymentContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentContents/add?`, args.paymentContentToBeAdded, req);
  }
};
export {createPaymentContent};


const updatePaymentContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentContent method',
  args:{paymentContentToBeUpdated: {type: PaymentContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentContents/${args.nullVal}?`, args.paymentContentToBeUpdated, req);
  }
};
export {updatePaymentContent};


const deletePaymentContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentContentByIdUpdated method',
  args:{paymentContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentContents/${args.paymentContentId}?`, null, req);
  }
};
export {deletePaymentContentByIdUpdated};
