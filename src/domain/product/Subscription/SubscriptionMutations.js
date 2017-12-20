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
import {SubscriptionInputType} from '../../product/Subscription/SubscriptionInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscription = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscription method',
  args:{subscriptionToBeAdded: {type: SubscriptionInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscriptions/add?`, args.subscriptionToBeAdded, req);
  }
};
export {createSubscription};


const updateSubscription = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscription method',
  args:{subscriptionToBeUpdated: {type: SubscriptionInputType},subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscriptions/${args.subscriptionId}?`, args.subscriptionToBeUpdated, req);
  }
};
export {updateSubscription};


const deleteSubscriptionByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionByIdUpdated method',
  args:{subscriptionId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscriptions/${args.subscriptionId}?`, null, req);
  }
};
export {deleteSubscriptionByIdUpdated};
