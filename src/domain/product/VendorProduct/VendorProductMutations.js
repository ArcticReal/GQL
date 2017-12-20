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
import {VendorProductInputType} from '../../product/VendorProduct/VendorProductInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createVendorProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz createVendorProduct method',
  args:{vendorProductToBeAdded: {type: VendorProductInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/vendorProducts/add?`, args.vendorProductToBeAdded, req);
  }
};
export {createVendorProduct};


const updateVendorProduct = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateVendorProduct method',
  args:{vendorProductToBeUpdated: {type: VendorProductInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/vendorProducts/${args.nullVal}?`, args.vendorProductToBeUpdated, req);
  }
};
export {updateVendorProduct};


const deleteVendorProductByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteVendorProductByIdUpdated method',
  args:{vendorProductId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/vendorProducts/${args.vendorProductId}?`, null, req);
  }
};
export {deleteVendorProductByIdUpdated};
