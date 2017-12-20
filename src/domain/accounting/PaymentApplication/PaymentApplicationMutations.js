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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPaymentApplication = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPaymentApplication method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/payment/paymentApplications/add?`, null, req);
  }
};
export {createPaymentApplication};


const updatePaymentApplication = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePaymentApplication method',
  args:{paymentApplicationToBeUpdated: {type: PaymentApplicationInputType},paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/payment/paymentApplications/${args.paymentApplicationId}?`, args.paymentApplicationToBeUpdated, req);
  }
};
export {updatePaymentApplication};


const deletePaymentApplicationByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePaymentApplicationByIdUpdated method',
  args:{paymentApplicationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/payment/paymentApplications/${args.paymentApplicationId}?`, null, req);
  }
};
export {deletePaymentApplicationByIdUpdated};
