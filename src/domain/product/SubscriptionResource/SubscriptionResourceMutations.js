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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionResource method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionResources/add?`, null, req);
  }
};
export {createSubscriptionResource};


const updateSubscriptionResource = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionResource method',
  args:{subscriptionResourceToBeUpdated: {type: SubscriptionResourceInputType},subscriptionResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionResources/${args.subscriptionResourceId}?`, args.subscriptionResourceToBeUpdated, req);
  }
};
export {updateSubscriptionResource};


const deleteSubscriptionResourceByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionResourceByIdUpdated method',
  args:{subscriptionResourceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionResources/${args.subscriptionResourceId}?`, null, req);
  }
};
export {deleteSubscriptionResourceByIdUpdated};
