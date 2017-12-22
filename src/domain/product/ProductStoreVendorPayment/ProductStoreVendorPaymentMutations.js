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
import {ProductStoreVendorPaymentResponseType} from '../../product/ProductStoreVendorPayment/ProductStoreVendorPaymentResponseType.js';
import {ProductStoreVendorPaymentInputType} from '../../product/ProductStoreVendorPayment/ProductStoreVendorPaymentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductStoreVendorPayment = {
  type: ProductStoreVendorPaymentResponseType,
  description: 'mutation for ofbiz createProductStoreVendorPayment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productStoreVendorPayments/add?`, null, req);
  }
};
export {createProductStoreVendorPayment};


const updateProductStoreVendorPayment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductStoreVendorPayment method',
  args:{productStoreVendorPaymentToBeUpdated: {type: ProductStoreVendorPaymentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productStoreVendorPayments/${args.nullVal}?`, args.productStoreVendorPaymentToBeUpdated, req);
  }
};
export {updateProductStoreVendorPayment};


const deleteProductStoreVendorPaymentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductStoreVendorPaymentByIdUpdated method',
  args:{productStoreVendorPaymentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productStoreVendorPayments/${args.productStoreVendorPaymentId}?`, null, req);
  }
};
export {deleteProductStoreVendorPaymentByIdUpdated};
