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
import {PaymentGatewayCyberSourceInputType} from '../../accounting/PaymentGatewayCyberSource/PaymentGatewayCyberSourceInputType.js';
import {PaymentGatewayCyberSourceResponseType} from '../../accounting/PaymentGatewayCyberSource/PaymentGatewayCyberSourceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayCyberSource = {
  type: PaymentGatewayCyberSourceResponseType,
  description: 'mutation for ofbiz createPaymentGatewayCyberSource method',
  args:{paymentGatewayCyberSourceToBeAdded: {type: PaymentGatewayCyberSourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayCyberSources/add?`, args.paymentGatewayCyberSourceToBeAdded, req);
  }
};
export {createPaymentGatewayCyberSource};


const updatePaymentGatewayCyberSource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGatewayCyberSource method',
  args:{paymentGatewayCyberSourceToBeUpdated: {type: PaymentGatewayCyberSourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayCyberSources/${args.nullVal}?`, args.paymentGatewayCyberSourceToBeUpdated, req);
  }
};
export {updatePaymentGatewayCyberSource};


const deletePaymentGatewayCyberSourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGatewayCyberSourceByIdUpdated method',
  args:{paymentGatewayCyberSourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayCyberSources/${args.paymentGatewayCyberSourceId}?`, null, req);
  }
};
export {deletePaymentGatewayCyberSourceByIdUpdated};
