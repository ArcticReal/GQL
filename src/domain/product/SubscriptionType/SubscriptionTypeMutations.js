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
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSubscriptionType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionTypes/add?`, null, req);
  }
};
export {createSubscriptionType};


const updateSubscriptionType = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSubscriptionType method',
  args:{subscriptionTypeToBeUpdated: {type: SubscriptionTypeInputType},subscriptionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionTypes/${args.subscriptionTypeId}?`, args.subscriptionTypeToBeUpdated, req);
  }
};
export {updateSubscriptionType};


const deleteSubscriptionTypeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSubscriptionTypeByIdUpdated method',
  args:{subscriptionTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionTypes/${args.subscriptionTypeId}?`, null, req);
  }
};
export {deleteSubscriptionTypeByIdUpdated};
