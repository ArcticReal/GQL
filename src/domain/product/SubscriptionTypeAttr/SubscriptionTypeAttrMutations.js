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
import {SubscriptionTypeAttrInputType} from '../../product/SubscriptionTypeAttr/SubscriptionTypeAttrInputType.js';
import {SubscriptionTypeAttrResponseType} from '../../product/SubscriptionTypeAttr/SubscriptionTypeAttrResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSubscriptionTypeAttr = {
  type: SubscriptionTypeAttrResponseType,
  description: 'mutation for ofbiz createSubscriptionTypeAttr method',
  args:{subscriptionTypeAttrToBeAdded: {type: SubscriptionTypeAttrInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`product/subscription/subscriptionTypeAttrs/add?`, args.subscriptionTypeAttrToBeAdded, req);
  }
};
export {createSubscriptionTypeAttr};


const updateSubscriptionTypeAttr = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSubscriptionTypeAttr method',
  args:{subscriptionTypeAttrToBeUpdated: {type: SubscriptionTypeAttrInputType},attrName: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`product/subscription/subscriptionTypeAttrs/${args.attrName}?`, args.subscriptionTypeAttrToBeUpdated, req);
  }
};
export {updateSubscriptionTypeAttr};


const deleteSubscriptionTypeAttrByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSubscriptionTypeAttrByIdUpdated method',
  args:{subscriptionTypeAttrId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`product/subscription/subscriptionTypeAttrs/${args.subscriptionTypeAttrId}?`, null, req);
  }
};
export {deleteSubscriptionTypeAttrByIdUpdated};
