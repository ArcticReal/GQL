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
import {SubscriptionCommEventInputType} from '../../product/SubscriptionCommEvent/SubscriptionCommEventInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSubscriptionCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSubscriptionCommEvent method',
  args:{subscriptionCommEventToBeAdded: {type: SubscriptionCommEventInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionCommEvents/add?`, args.subscriptionCommEventToBeAdded, req);
  }
};
export {createSubscriptionCommEvent};


const updateSubscriptionCommEvent = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionCommEvent method',
  args:{subscriptionCommEventToBeUpdated: {type: SubscriptionCommEventInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionCommEvents/${args.nullVal}?`, args.subscriptionCommEventToBeUpdated, req);
  }
};
export {updateSubscriptionCommEvent};


const deleteSubscriptionCommEventByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionCommEventByIdUpdated method',
  args:{subscriptionCommEventId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionCommEvents/${args.subscriptionCommEventId}?`, null, req);
  }
};
export {deleteSubscriptionCommEventByIdUpdated};
