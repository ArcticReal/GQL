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
import {ProductCalculatedInfoInputType} from '../../product/ProductCalculatedInfo/ProductCalculatedInfoInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCalculatedInfo = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCalculatedInfo method',
  args:{productCalculatedInfoToBeAdded: {type: ProductCalculatedInfoInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCalculatedInfos/add?`, args.productCalculatedInfoToBeAdded, req);
  }
};
export {createProductCalculatedInfo};


const updateProductCalculatedInfo = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCalculatedInfo method',
  args:{productCalculatedInfoToBeUpdated: {type: ProductCalculatedInfoInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCalculatedInfos/${args.nullVal}?`, args.productCalculatedInfoToBeUpdated, req);
  }
};
export {updateProductCalculatedInfo};


const deleteProductCalculatedInfoByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCalculatedInfoByIdUpdated method',
  args:{productCalculatedInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCalculatedInfos/${args.productCalculatedInfoId}?`, null, req);
  }
};
export {deleteProductCalculatedInfoByIdUpdated};
