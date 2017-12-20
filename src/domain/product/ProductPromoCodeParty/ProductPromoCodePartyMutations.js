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
import {ProductPromoCodePartyInputType} from '../../product/ProductPromoCodeParty/ProductPromoCodePartyInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createProductPromoCodeParty = {
  type: ResopnseType,
  description: 'mutation for ofbiz createProductPromoCodeParty method',
  args:{productPromoCodePartyToBeAdded: {type: ProductPromoCodePartyInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/product/productPromoCodePartys/add?`, args.productPromoCodePartyToBeAdded, req);
  }
};
export {createProductPromoCodeParty};


const updateProductPromoCodeParty = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateProductPromoCodeParty method',
  args:{productPromoCodePartyToBeUpdated: {type: ProductPromoCodePartyInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/product/productPromoCodePartys/${args.nullVal}?`, args.productPromoCodePartyToBeUpdated, req);
  }
};
export {updateProductPromoCodeParty};


const deleteProductPromoCodePartyByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteProductPromoCodePartyByIdUpdated method',
  args:{productPromoCodePartyId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/product/productPromoCodePartys/${args.productPromoCodePartyId}?`, null, req);
  }
};
export {deleteProductPromoCodePartyByIdUpdated};
