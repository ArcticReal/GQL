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
import {PaymentGlAccountTypeMapInputType} from '../../accounting/PaymentGlAccountTypeMap/PaymentGlAccountTypeMapInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPaymentGlAccountTypeMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPaymentGlAccountTypeMap method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/paymentGlAccountTypeMaps/add?`, null, req);
  }
};
export {createPaymentGlAccountTypeMap};


const updatePaymentGlAccountTypeMap = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePaymentGlAccountTypeMap method',
  args:{paymentGlAccountTypeMapToBeUpdated: {type: PaymentGlAccountTypeMapInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/paymentGlAccountTypeMaps/${args.nullVal}?`, args.paymentGlAccountTypeMapToBeUpdated, req);
  }
};
export {updatePaymentGlAccountTypeMap};


const deletePaymentGlAccountTypeMapByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePaymentGlAccountTypeMapByIdUpdated method',
  args:{paymentGlAccountTypeMapId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/paymentGlAccountTypeMaps/${args.paymentGlAccountTypeMapId}?`, null, req);
  }
};
export {deletePaymentGlAccountTypeMapByIdUpdated};
