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
import {SupplierRatingTypeInputType} from '../../product/SupplierRatingType/SupplierRatingTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSupplierRatingType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSupplierRatingType method',
  args:{supplierRatingTypeToBeAdded: {type: SupplierRatingTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/supplierRatingTypes/add?`, args.supplierRatingTypeToBeAdded, req);
  }
};
export {createSupplierRatingType};


const updateSupplierRatingType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSupplierRatingType method',
  args:{supplierRatingTypeToBeUpdated: {type: SupplierRatingTypeInputType},supplierRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/supplierRatingTypes/${args.supplierRatingTypeId}?`, args.supplierRatingTypeToBeUpdated, req);
  }
};
export {updateSupplierRatingType};


const deleteSupplierRatingTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSupplierRatingTypeByIdUpdated method',
  args:{supplierRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/supplierRatingTypes/${args.supplierRatingTypeId}?`, null, req);
  }
};
export {deleteSupplierRatingTypeByIdUpdated};
