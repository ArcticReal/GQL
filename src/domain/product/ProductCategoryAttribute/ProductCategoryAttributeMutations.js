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
import {ProductCategoryAttributeResponseType} from '../../product/ProductCategoryAttribute/ProductCategoryAttributeResponseType.js';
import {ProductCategoryAttributeInputType} from '../../product/ProductCategoryAttribute/ProductCategoryAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductCategoryAttribute = {
  type: ProductCategoryAttributeResponseType,
  description: 'mutation for ofbiz createProductCategoryAttribute method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productCategoryAttributes/add?`, null, req);
  }
};
export {createProductCategoryAttribute};


const updateProductCategoryAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductCategoryAttribute method',
  args:{productCategoryAttributeToBeUpdated: {type: ProductCategoryAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productCategoryAttributes/${args.attrName}?`, args.productCategoryAttributeToBeUpdated, req);
  }
};
export {updateProductCategoryAttribute};


const deleteProductCategoryAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductCategoryAttributeByIdUpdated method',
  args:{productCategoryAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productCategoryAttributes/${args.productCategoryAttributeId}?`, null, req);
  }
};
export {deleteProductCategoryAttributeByIdUpdated};
