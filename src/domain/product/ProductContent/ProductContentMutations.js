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
import {ProductContentInputType} from '../../product/ProductContent/ProductContentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductContent method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productContents/add?`, null, req);
  }
};
export {createProductContent};


const updateProductContent = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductContent method',
  args:{productContentToBeUpdated: {type: ProductContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productContents/${args.nullVal}?`, args.productContentToBeUpdated, req);
  }
};
export {updateProductContent};


const deleteProductContentByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductContentByIdUpdated method',
  args:{productContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productContents/${args.productContentId}?`, null, req);
  }
};
export {deleteProductContentByIdUpdated};
