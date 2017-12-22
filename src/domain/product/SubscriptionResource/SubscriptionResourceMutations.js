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
import {SubscriptionResourceInputType} from '../../product/SubscriptionResource/SubscriptionResourceInputType.js';
import {SubscriptionResourceResponseType} from '../../product/SubscriptionResource/SubscriptionResourceResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionResource = {
  type: SubscriptionResourceResponseType,
  description: 'mutation for ofbiz createSubscriptionResource method',
  args:{subscriptionResourceToBeAdded: {type: SubscriptionResourceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionResources/add?`, args.subscriptionResourceToBeAdded, req);
  }
};
export {createSubscriptionResource};


const updateSubscriptionResource = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionResource method',
  args:{subscriptionResourceToBeUpdated: {type: SubscriptionResourceInputType},subscriptionResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionResources/${args.subscriptionResourceId}?`, args.subscriptionResourceToBeUpdated, req);
  }
};
export {updateSubscriptionResource};


const deleteSubscriptionResourceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionResourceByIdUpdated method',
  args:{subscriptionResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionResources/${args.subscriptionResourceId}?`, null, req);
  }
};
export {deleteSubscriptionResourceByIdUpdated};
