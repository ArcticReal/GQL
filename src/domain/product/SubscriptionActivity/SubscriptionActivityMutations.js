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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionActivity = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionActivity method',
  args:{subscriptionActivityToBeAdded: {type: SubscriptionActivityInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionActivitys/add?`, args.subscriptionActivityToBeAdded, req);
  }
};
export {createSubscriptionActivity};


const updateSubscriptionActivity = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionActivity method',
  args:{subscriptionActivityToBeUpdated: {type: SubscriptionActivityInputType},subscriptionActivityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionActivitys/${args.subscriptionActivityId}?`, args.subscriptionActivityToBeUpdated, req);
  }
};
export {updateSubscriptionActivity};


const deleteSubscriptionActivityByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionActivityByIdUpdated method',
  args:{subscriptionActivityId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionActivitys/${args.subscriptionActivityId}?`, null, req);
  }
};
export {deleteSubscriptionActivityByIdUpdated};
