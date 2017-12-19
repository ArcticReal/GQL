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
import {ProductTypeInputType} from '../../product/ProductType/ProductTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createProductType method',
  args:{productTypeToBeAdded: {type: ProductTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productTypes/add?`, args.productTypeToBeAdded, req);
  }
};
export {createProductType};


const updateProductType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductType method',
  args:{productTypeToBeUpdated: {type: ProductTypeInputType},productTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productTypes/${args.productTypeId}?`, args.productTypeToBeUpdated, req);
  }
};
export {updateProductType};


const deleteProductTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductTypeByIdUpdated method',
  args:{productTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productTypes/${args.productTypeId}?`, null, req);
  }
};
export {deleteProductTypeByIdUpdated};
