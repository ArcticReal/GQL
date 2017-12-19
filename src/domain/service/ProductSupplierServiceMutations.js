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
import {postToUrl,deleteToUrl,putToUrl} from '../../framework/ofbizCon.js';


const createReorderGuideline = {
  type: GraphQLString,
  description: 'mutation for ofbiz createReorderGuideline method',
  args:{fromDate: {type: GraphQLString},reorderLevel: {type: GraphQLFloat},reorderGuidelineId: {type: GraphQLString},roleTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},geoId: {type: GraphQLString},reorderQuantity: {type: GraphQLFloat},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSupplier/createReorderGuideline?fromDate=${args.fromDate}reorderLevel=${args.reorderLevel}reorderGuidelineId=${args.reorderGuidelineId}roleTypeId=${args.roleTypeId}facilityId=${args.facilityId}productId=${args.productId}geoId=${args.geoId}reorderQuantity=${args.reorderQuantity}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {createReorderGuideline};


const createSupplierRatingType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSupplierRatingType method',
  args:{supplierRatingTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSupplier/createSupplierRatingType?supplierRatingTypeId=${args.supplierRatingTypeId}description=${args.description}`, null, req);
  }
};
export {createSupplierRatingType};


const deleteReorderGuideline = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReorderGuideline method',
  args:{reorderGuidelineId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSupplier/deleteReorderGuideline?reorderGuidelineId=${args.reorderGuidelineId}`, null, req);
  }
};
export {deleteReorderGuideline};


const deleteSupplierRatingType = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSupplierRatingType method',
  args:{supplierRatingTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSupplier/deleteSupplierRatingType?supplierRatingTypeId=${args.supplierRatingTypeId}`, null, req);
  }
};
export {deleteSupplierRatingType};


const updateReorderGuideline = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReorderGuideline method',
  args:{reorderGuidelineId: {type: GraphQLString},fromDate: {type: GraphQLString},reorderLevel: {type: GraphQLFloat},roleTypeId: {type: GraphQLString},facilityId: {type: GraphQLString},productId: {type: GraphQLString},geoId: {type: GraphQLString},reorderQuantity: {type: GraphQLFloat},partyId: {type: GraphQLString},thruDate: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSupplier/updateReorderGuideline?reorderGuidelineId=${args.reorderGuidelineId}fromDate=${args.fromDate}reorderLevel=${args.reorderLevel}roleTypeId=${args.roleTypeId}facilityId=${args.facilityId}productId=${args.productId}geoId=${args.geoId}reorderQuantity=${args.reorderQuantity}partyId=${args.partyId}thruDate=${args.thruDate}`, null, req);
  }
};
export {updateReorderGuideline};


const updateSupplierRatingType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSupplierRatingType method',
  args:{supplierRatingTypeId: {type: GraphQLString},description: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return postToUrl(`service/productSupplier/updateSupplierRatingType?supplierRatingTypeId=${args.supplierRatingTypeId}description=${args.description}`, null, req);
  }
};
export {updateSupplierRatingType};
