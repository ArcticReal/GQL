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
import {ProductCategoryTypeAttrInputType} from '../../product/ProductCategoryTypeAttr/ProductCategoryTypeAttrInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductCategoryTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductCategoryTypeAttr method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryTypeAttrs/add?`, null, req);
  }
};
export {createProductCategoryTypeAttr};


const updateProductCategoryTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryTypeAttr method',
  args:{productCategoryTypeAttrToBeUpdated: {type: ProductCategoryTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryTypeAttrs/${args.attrName}?`, args.productCategoryTypeAttrToBeUpdated, req);
  }
};
export {updateProductCategoryTypeAttr};


const deleteProductCategoryTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryTypeAttrByIdUpdated method',
  args:{productCategoryTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryTypeAttrs/${args.productCategoryTypeAttrId}?`, null, req);
  }
};
export {deleteProductCategoryTypeAttrByIdUpdated};
