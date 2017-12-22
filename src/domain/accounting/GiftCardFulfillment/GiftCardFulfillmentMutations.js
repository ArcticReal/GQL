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
import {GiftCardFulfillmentResponseType} from '../../accounting/GiftCardFulfillment/GiftCardFulfillmentResponseType.js';
import {GiftCardFulfillmentInputType} from '../../accounting/GiftCardFulfillment/GiftCardFulfillmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGiftCardFulfillment = {
  type: GiftCardFulfillmentResponseType,
  description: 'mutation for ofbiz createGiftCardFulfillment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/giftCard/giftCardFulfillments/add?`, null, req);
  }
};
export {createGiftCardFulfillment};


const updateGiftCardFulfillment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGiftCardFulfillment method',
  args:{giftCardFulfillmentToBeUpdated: {type: GiftCardFulfillmentInputType},fulfillmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/giftCard/giftCardFulfillments/${args.fulfillmentId}?`, args.giftCardFulfillmentToBeUpdated, req);
  }
};
export {updateGiftCardFulfillment};


const deleteGiftCardFulfillmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGiftCardFulfillmentByIdUpdated method',
  args:{giftCardFulfillmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/giftCard/giftCardFulfillments/${args.giftCardFulfillmentId}?`, null, req);
  }
};
export {deleteGiftCardFulfillmentByIdUpdated};
