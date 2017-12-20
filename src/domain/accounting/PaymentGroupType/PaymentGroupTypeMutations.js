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
import {PaymentGroupTypeInputType} from '../../accounting/PaymentGroupType/PaymentGroupTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentGroupType method',
  args:{paymentGroupTypeToBeAdded: {type: PaymentGroupTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentGroupTypes/add?`, args.paymentGroupTypeToBeAdded, req);
  }
};
export {createPaymentGroupType};


const updatePaymentGroupType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentGroupType method',
  args:{paymentGroupTypeToBeUpdated: {type: PaymentGroupTypeInputType},paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentGroupTypes/${args.paymentGroupTypeId}?`, args.paymentGroupTypeToBeUpdated, req);
  }
};
export {updatePaymentGroupType};


const deletePaymentGroupTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentGroupTypeByIdUpdated method',
  args:{paymentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentGroupTypes/${args.paymentGroupTypeId}?`, null, req);
  }
};
export {deletePaymentGroupTypeByIdUpdated};
