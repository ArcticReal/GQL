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
import {ProductCategoryAttributeInputType} from '../../product/ProductCategoryAttribute/ProductCategoryAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductCategoryAttribute method',
  args:{productCategoryAttributeToBeAdded: {type: ProductCategoryAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryAttributes/add?`, args.productCategoryAttributeToBeAdded, req);
  }
};
export {createProductCategoryAttribute};


const updateProductCategoryAttribute = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductCategoryAttribute method',
  args:{productCategoryAttributeToBeUpdated: {type: ProductCategoryAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryAttributes/${args.attrName}?`, args.productCategoryAttributeToBeUpdated, req);
  }
};
export {updateProductCategoryAttribute};


const deleteProductCategoryAttributeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductCategoryAttributeByIdUpdated method',
  args:{productCategoryAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryAttributes/${args.productCategoryAttributeId}?`, null, req);
  }
};
export {deleteProductCategoryAttributeByIdUpdated};
