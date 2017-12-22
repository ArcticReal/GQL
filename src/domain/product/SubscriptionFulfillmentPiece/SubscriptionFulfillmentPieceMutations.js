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
import {SubscriptionFulfillmentPieceInputType} from '../../product/SubscriptionFulfillmentPiece/SubscriptionFulfillmentPieceInputType.js';
import {SubscriptionFulfillmentPieceResponseType} from '../../product/SubscriptionFulfillmentPiece/SubscriptionFulfillmentPieceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionFulfillmentPiece = {
  type: SubscriptionFulfillmentPieceResponseType,
  description: 'mutation for ofbiz createSubscriptionFulfillmentPiece method',
  args:{subscriptionFulfillmentPieceToBeAdded: {type: SubscriptionFulfillmentPieceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionFulfillmentPieces/add?`, args.subscriptionFulfillmentPieceToBeAdded, req);
  }
};
export {createSubscriptionFulfillmentPiece};


const updateSubscriptionFulfillmentPiece = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionFulfillmentPiece method',
  args:{subscriptionFulfillmentPieceToBeUpdated: {type: SubscriptionFulfillmentPieceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionFulfillmentPieces/${args.nullVal}?`, args.subscriptionFulfillmentPieceToBeUpdated, req);
  }
};
export {updateSubscriptionFulfillmentPiece};


const deleteSubscriptionFulfillmentPieceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionFulfillmentPieceByIdUpdated method',
  args:{subscriptionFulfillmentPieceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionFulfillmentPieces/${args.subscriptionFulfillmentPieceId}?`, null, req);
  }
};
export {deleteSubscriptionFulfillmentPieceByIdUpdated};
