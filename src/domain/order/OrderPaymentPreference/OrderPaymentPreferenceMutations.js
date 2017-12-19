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
import {OrderPaymentPreferenceInputType} from '../../order/OrderPaymentPreference/OrderPaymentPreferenceInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderPaymentPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderPaymentPreference method',
  args:{orderPaymentPreferenceToBeAdded: {type: OrderPaymentPreferenceInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderPaymentPreferences/add?`, args.orderPaymentPreferenceToBeAdded, req);
  }
};
export {createOrderPaymentPreference};


const updateOrderPaymentPreference = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderPaymentPreference method',
  args:{orderPaymentPreferenceToBeUpdated: {type: OrderPaymentPreferenceInputType},orderPaymentPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderPaymentPreferences/${args.orderPaymentPreferenceId}?`, args.orderPaymentPreferenceToBeUpdated, req);
  }
};
export {updateOrderPaymentPreference};


const deleteOrderPaymentPreferenceByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderPaymentPreferenceByIdUpdated method',
  args:{orderPaymentPreferenceId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderPaymentPreferences/${args.orderPaymentPreferenceId}?`, null, req);
  }
};
export {deleteOrderPaymentPreferenceByIdUpdated};
