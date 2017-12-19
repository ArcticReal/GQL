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
import {PaymentTypeInputType} from '../../accounting/PaymentType/PaymentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentType method',
  args:{paymentTypeToBeAdded: {type: PaymentTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentTypes/add?`, args.paymentTypeToBeAdded, req);
  }
};
export {createPaymentType};


const updatePaymentType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentType method',
  args:{paymentTypeToBeUpdated: {type: PaymentTypeInputType},paymentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentTypes/${args.paymentTypeId}?`, args.paymentTypeToBeUpdated, req);
  }
};
export {updatePaymentType};


const deletePaymentTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentTypeByIdUpdated method',
  args:{paymentTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentTypes/${args.paymentTypeId}?`, null, req);
  }
};
export {deletePaymentTypeByIdUpdated};
