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
import {ProductPromoContentInputType} from '../../product/ProductPromoContent/ProductPromoContentInputType.js';
import {ProductPromoContentResponseType} from '../../product/ProductPromoContent/ProductPromoContentResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoContent = {
  type: ProductPromoContentResponseType,
  description: 'mutation for ofbiz createProductPromoContent method',
  args:{productPromoContentToBeAdded: {type: ProductPromoContentInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoContents/add?`, args.productPromoContentToBeAdded, req);
  }
};
export {createProductPromoContent};


const updateProductPromoContent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateProductPromoContent method',
  args:{productPromoContentToBeUpdated: {type: ProductPromoContentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoContents/${args.nullVal}?`, args.productPromoContentToBeUpdated, req);
  }
};
export {updateProductPromoContent};


const deleteProductPromoContentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteProductPromoContentByIdUpdated method',
  args:{productPromoContentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoContents/${args.productPromoContentId}?`, null, req);
  }
};
export {deleteProductPromoContentByIdUpdated};
