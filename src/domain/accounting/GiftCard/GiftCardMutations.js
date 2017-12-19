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
import {GiftCardInputType} from '../../accounting/GiftCard/GiftCardInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createGiftCard = {
  type: GraphQLString,
  description: 'mutation for ofbiz createGiftCard method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/giftCards/add?`, null, req);
  }
};
export {createGiftCard};


const deleteGiftCardByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGiftCardByIdUpdated method',
  args:{giftCardId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/giftCards/${args.giftCardId}?`, null, req);
  }
};
export {deleteGiftCardByIdUpdated};


const updateGiftCard = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGiftCard method',
  args:{giftCardToBeUpdated: {type: GiftCardInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/giftCards/${args.nullVal}?`, args.giftCardToBeUpdated, req);
  }
};
export {updateGiftCard};
