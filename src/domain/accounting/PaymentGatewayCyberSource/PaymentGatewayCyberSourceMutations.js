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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGatewayCyberSource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGatewayCyberSource method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGatewayCyberSources/add?`, null, req);
  }
};
export {createPaymentGatewayCyberSource};


const updatePaymentGatewayCyberSource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGatewayCyberSource method',
  args:{paymentGatewayCyberSourceToBeUpdated: {type: PaymentGatewayCyberSourceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGatewayCyberSources/${args.nullVal}?`, args.paymentGatewayCyberSourceToBeUpdated, req);
  }
};
export {updatePaymentGatewayCyberSource};


const deletePaymentGatewayCyberSourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGatewayCyberSourceByIdUpdated method',
  args:{paymentGatewayCyberSourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGatewayCyberSources/${args.paymentGatewayCyberSourceId}?`, null, req);
  }
};
export {deletePaymentGatewayCyberSourceByIdUpdated};
