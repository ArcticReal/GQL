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
import {SupplierProductInputType} from '../../product/SupplierProduct/SupplierProductInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSupplierProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSupplierProduct method',
  args:{supplierProductToBeAdded: {type: SupplierProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/supplierProducts/add?`, args.supplierProductToBeAdded, req);
  }
};
export {createSupplierProduct};


const updateSupplierProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSupplierProduct method',
  args:{supplierProductToBeUpdated: {type: SupplierProductInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/supplierProducts/${args.nullVal}?`, args.supplierProductToBeUpdated, req);
  }
};
export {updateSupplierProduct};


const deleteSupplierProductByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSupplierProductByIdUpdated method',
  args:{supplierProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/supplierProducts/${args.supplierProductId}?`, null, req);
  }
};
export {deleteSupplierProductByIdUpdated};
