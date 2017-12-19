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
import {VendorInputType} from '../../party/Vendor/VendorInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createVendor = {
  type: GraphQLString,
  description: 'mutation for ofbiz createVendor method',
  args:{vendorToBeAdded: {type: VendorInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/vendors/add?`, args.vendorToBeAdded, req);
  }
};
export {createVendor};


const updateVendor = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateVendor method',
  args:{vendorToBeUpdated: {type: VendorInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/vendors/${args.nullVal}?`, args.vendorToBeUpdated, req);
  }
};
export {updateVendor};


const deleteVendorByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteVendorByIdUpdated method',
  args:{vendorId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/vendors/${args.vendorId}?`, null, req);
  }
};
export {deleteVendorByIdUpdated};
