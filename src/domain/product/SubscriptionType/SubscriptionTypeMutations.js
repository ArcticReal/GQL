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
import {SubscriptionTypeInputType} from '../../product/SubscriptionType/SubscriptionTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSubscriptionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSubscriptionType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionTypes/add?`, null, req);
  }
};
export {createSubscriptionType};


const updateSubscriptionType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionType method',
  args:{subscriptionTypeToBeUpdated: {type: SubscriptionTypeInputType},subscriptionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionTypes/${args.subscriptionTypeId}?`, args.subscriptionTypeToBeUpdated, req);
  }
};
export {updateSubscriptionType};


const deleteSubscriptionTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionTypeByIdUpdated method',
  args:{subscriptionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionTypes/${args.subscriptionTypeId}?`, null, req);
  }
};
export {deleteSubscriptionTypeByIdUpdated};
