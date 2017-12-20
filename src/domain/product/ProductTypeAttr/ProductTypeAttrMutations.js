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
import {ProductTypeAttrInputType} from '../../product/ProductTypeAttr/ProductTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductTypeAttr method',
  args:{productTypeAttrToBeAdded: {type: ProductTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productTypeAttrs/add?`, args.productTypeAttrToBeAdded, req);
  }
};
export {createProductTypeAttr};


const updateProductTypeAttr = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductTypeAttr method',
  args:{productTypeAttrToBeUpdated: {type: ProductTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productTypeAttrs/${args.attrName}?`, args.productTypeAttrToBeUpdated, req);
  }
};
export {updateProductTypeAttr};


const deleteProductTypeAttrByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductTypeAttrByIdUpdated method',
  args:{productTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productTypeAttrs/${args.productTypeAttrId}?`, null, req);
  }
};
export {deleteProductTypeAttrByIdUpdated};
