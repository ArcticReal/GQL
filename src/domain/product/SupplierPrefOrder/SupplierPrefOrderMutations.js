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
import {SupplierPrefOrderInputType} from '../../product/SupplierPrefOrder/SupplierPrefOrderInputType.js';
import {SupplierPrefOrderResponseType} from '../../product/SupplierPrefOrder/SupplierPrefOrderResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSupplierPrefOrder = {
  type: SupplierPrefOrderResponseType,
  description: 'mutation for ofbiz createSupplierPrefOrder method',
  args:{supplierPrefOrderToBeAdded: {type: SupplierPrefOrderInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/supplierPrefOrders/add?`, args.supplierPrefOrderToBeAdded, req);
  }
};
export {createSupplierPrefOrder};


const updateSupplierPrefOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSupplierPrefOrder method',
  args:{supplierPrefOrderToBeUpdated: {type: SupplierPrefOrderInputType},supplierPrefOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/supplierPrefOrders/${args.supplierPrefOrderId}?`, args.supplierPrefOrderToBeUpdated, req);
  }
};
export {updateSupplierPrefOrder};


const deleteSupplierPrefOrderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSupplierPrefOrderByIdUpdated method',
  args:{supplierPrefOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/supplierPrefOrders/${args.supplierPrefOrderId}?`, null, req);
  }
};
export {deleteSupplierPrefOrderByIdUpdated};
