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
import {OrderProductPromoCodeInputType} from '../../order/OrderProductPromoCode/OrderProductPromoCodeInputType.js';
import {OrderProductPromoCodeResponseType} from '../../order/OrderProductPromoCode/OrderProductPromoCodeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderProductPromoCode = {
  type: OrderProductPromoCodeResponseType,
  description: 'mutation for ofbiz createOrderProductPromoCode method',
  args:{orderProductPromoCodeToBeAdded: {type: OrderProductPromoCodeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderProductPromoCodes/add?`, args.orderProductPromoCodeToBeAdded, req);
  }
};
export {createOrderProductPromoCode};


const updateOrderProductPromoCode = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderProductPromoCode method',
  args:{orderProductPromoCodeToBeUpdated: {type: OrderProductPromoCodeInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderProductPromoCodes/${args.nullVal}?`, args.orderProductPromoCodeToBeUpdated, req);
  }
};
export {updateOrderProductPromoCode};


const deleteOrderProductPromoCodeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderProductPromoCodeByIdUpdated method',
  args:{orderProductPromoCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderProductPromoCodes/${args.orderProductPromoCodeId}?`, null, req);
  }
};
export {deleteOrderProductPromoCodeByIdUpdated};
