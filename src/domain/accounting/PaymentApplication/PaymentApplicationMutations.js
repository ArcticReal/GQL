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
import {PaymentApplicationInputType} from '../../accounting/PaymentApplication/PaymentApplicationInputType.js';
import {PaymentApplicationResponseType} from '../../accounting/PaymentApplication/PaymentApplicationResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentApplication = {
  type: PaymentApplicationResponseType,
  description: 'mutation for ofbiz createPaymentApplication method',
  args:{paymentApplicationToBeAdded: {type: PaymentApplicationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentApplications/add?`, args.paymentApplicationToBeAdded, req);
  }
};
export {createPaymentApplication};


const updatePaymentApplication = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentApplication method',
  args:{paymentApplicationToBeUpdated: {type: PaymentApplicationInputType},paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentApplications/${args.paymentApplicationId}?`, args.paymentApplicationToBeUpdated, req);
  }
};
export {updatePaymentApplication};


const deletePaymentApplicationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentApplicationByIdUpdated method',
  args:{paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentApplications/${args.paymentApplicationId}?`, null, req);
  }
};
export {deletePaymentApplicationByIdUpdated};
