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
import {ProductAttributeInputType} from '../../product/ProductAttribute/ProductAttributeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductAttribute method',
  args:{productAttributeToBeAdded: {type: ProductAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productAttributes/add?`, args.productAttributeToBeAdded, req);
  }
};
export {createProductAttribute};


const deleteProductAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductAttributeByIdUpdated method',
  args:{productAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productAttributes/${args.productAttributeId}?`, null, req);
  }
};
export {deleteProductAttributeByIdUpdated};


const updateProductAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductAttribute method',
  args:{productAttributeToBeUpdated: {type: ProductAttributeInputType},productId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productAttributes/${args.productId}?`, args.productAttributeToBeUpdated, req);
  }
};
export {updateProductAttribute};
