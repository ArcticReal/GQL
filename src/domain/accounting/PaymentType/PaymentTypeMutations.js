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
import {PaymentTypeResponseType} from '../../accounting/PaymentType/PaymentTypeResponseType.js';
import {PaymentTypeInputType} from '../../accounting/PaymentType/PaymentTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentType = {
  type: PaymentTypeResponseType,
  description: 'mutation for ofbiz createPaymentType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentTypes/add?`, null, req);
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
