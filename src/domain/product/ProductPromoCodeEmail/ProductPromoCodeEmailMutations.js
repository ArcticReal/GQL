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
import {ProductPromoCodeEmailInputType} from '../../product/ProductPromoCodeEmail/ProductPromoCodeEmailInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoCodeEmail = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductPromoCodeEmail method',
  args:{productPromoCodeEmailToBeAdded: {type: ProductPromoCodeEmailInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoCodeEmails/add?`, args.productPromoCodeEmailToBeAdded, req);
  }
};
export {createProductPromoCodeEmail};


const updateProductPromoCodeEmail = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductPromoCodeEmail method',
  args:{productPromoCodeEmailToBeUpdated: {type: ProductPromoCodeEmailInputType},emailAddress: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoCodeEmails/${args.emailAddress}?`, args.productPromoCodeEmailToBeUpdated, req);
  }
};
export {updateProductPromoCodeEmail};


const deleteProductPromoCodeEmailByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductPromoCodeEmailByIdUpdated method',
  args:{productPromoCodeEmailId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoCodeEmails/${args.productPromoCodeEmailId}?`, null, req);
  }
};
export {deleteProductPromoCodeEmailByIdUpdated};
