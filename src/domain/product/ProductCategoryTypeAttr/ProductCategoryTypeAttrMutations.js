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
import {ProductCategoryTypeAttrResponseType} from '../../product/ProductCategoryTypeAttr/ProductCategoryTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryTypeAttr = {
  type: ProductCategoryTypeAttrResponseType,
  description: 'mutation for ofbiz createProductCategoryTypeAttr method',
  args:{productCategoryTypeAttrToBeAdded: {type: ProductCategoryTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryTypeAttrs/add?`, args.productCategoryTypeAttrToBeAdded, req);
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
