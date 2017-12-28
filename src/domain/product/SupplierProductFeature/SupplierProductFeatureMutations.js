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
import {SupplierProductFeatureInputType} from '../../product/SupplierProductFeature/SupplierProductFeatureInputType.js';
import {SupplierProductFeatureResponseType} from '../../product/SupplierProductFeature/SupplierProductFeatureResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSupplierProductFeature = {
  type: SupplierProductFeatureResponseType,
  description: 'mutation for ofbiz createSupplierProductFeature method',
  args:{supplierProductFeatureToBeAdded: {type: SupplierProductFeatureInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/supplierProductFeatures/add?`, args.supplierProductFeatureToBeAdded, req);
  }
};
export {createSupplierProductFeature};


const updateSupplierProductFeature = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSupplierProductFeature method',
  args:{supplierProductFeatureToBeUpdated: {type: SupplierProductFeatureInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/supplierProductFeatures/${args.nullVal}?`, args.supplierProductFeatureToBeUpdated, req);
  }
};
export {updateSupplierProductFeature};


const deleteSupplierProductFeatureByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSupplierProductFeatureByIdUpdated method',
  args:{supplierProductFeatureId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/supplierProductFeatures/${args.supplierProductFeatureId}?`, null, req);
  }
};
export {deleteSupplierProductFeatureByIdUpdated};
