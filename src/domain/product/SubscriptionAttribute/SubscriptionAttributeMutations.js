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
import {SubscriptionAttributeInputType} from '../../product/SubscriptionAttribute/SubscriptionAttributeInputType.js';
import {SubscriptionAttributeResponseType} from '../../product/SubscriptionAttribute/SubscriptionAttributeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionAttribute = {
  type: SubscriptionAttributeResponseType,
  description: 'mutation for ofbiz createSubscriptionAttribute method',
  args:{subscriptionAttributeToBeAdded: {type: SubscriptionAttributeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionAttributes/add?`, args.subscriptionAttributeToBeAdded, req);
  }
};
export {createSubscriptionAttribute};


const updateSubscriptionAttribute = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionAttribute method',
  args:{subscriptionAttributeToBeUpdated: {type: SubscriptionAttributeInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionAttributes/${args.attrName}?`, args.subscriptionAttributeToBeUpdated, req);
  }
};
export {updateSubscriptionAttribute};


const deleteSubscriptionAttributeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionAttributeByIdUpdated method',
  args:{subscriptionAttributeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionAttributes/${args.subscriptionAttributeId}?`, null, req);
  }
};
export {deleteSubscriptionAttributeByIdUpdated};
