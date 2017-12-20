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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionFulfillmentPiece = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionFulfillmentPiece method',
  args:{subscriptionFulfillmentPieceToBeAdded: {type: SubscriptionFulfillmentPieceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionFulfillmentPieces/add?`, args.subscriptionFulfillmentPieceToBeAdded, req);
  }
};
export {createSubscriptionFulfillmentPiece};


const updateSubscriptionFulfillmentPiece = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionFulfillmentPiece method',
  args:{subscriptionFulfillmentPieceToBeUpdated: {type: SubscriptionFulfillmentPieceInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionFulfillmentPieces/${args.nullVal}?`, args.subscriptionFulfillmentPieceToBeUpdated, req);
  }
};
export {updateSubscriptionFulfillmentPiece};


const deleteSubscriptionFulfillmentPieceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionFulfillmentPieceByIdUpdated method',
  args:{subscriptionFulfillmentPieceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionFulfillmentPieces/${args.subscriptionFulfillmentPieceId}?`, null, req);
  }
};
export {deleteSubscriptionFulfillmentPieceByIdUpdated};
