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
import {SubscriptionActivityInputType} from '../../product/SubscriptionActivity/SubscriptionActivityInputType.js';
import {SubscriptionActivityResponseType} from '../../product/SubscriptionActivity/SubscriptionActivityResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionActivity = {
  type: SubscriptionActivityResponseType,
  description: 'mutation for ofbiz createSubscriptionActivity method',
  args:{subscriptionActivityToBeAdded: {type: SubscriptionActivityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionActivitys/add?`, args.subscriptionActivityToBeAdded, req);
  }
};
export {createSubscriptionActivity};


const updateSubscriptionActivity = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionActivity method',
  args:{subscriptionActivityToBeUpdated: {type: SubscriptionActivityInputType},subscriptionActivityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionActivitys/${args.subscriptionActivityId}?`, args.subscriptionActivityToBeUpdated, req);
  }
};
export {updateSubscriptionActivity};


const deleteSubscriptionActivityByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionActivityByIdUpdated method',
  args:{subscriptionActivityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionActivitys/${args.subscriptionActivityId}?`, null, req);
  }
};
export {deleteSubscriptionActivityByIdUpdated};
