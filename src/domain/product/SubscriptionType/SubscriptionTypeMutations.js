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
import {SubscriptionTypeResponseType} from '../../product/SubscriptionType/SubscriptionTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionType = {
  type: SubscriptionTypeResponseType,
  description: 'mutation for ofbiz createSubscriptionType method',
  args:{subscriptionTypeToBeAdded: {type: SubscriptionTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionTypes/add?`, args.subscriptionTypeToBeAdded, req);
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
