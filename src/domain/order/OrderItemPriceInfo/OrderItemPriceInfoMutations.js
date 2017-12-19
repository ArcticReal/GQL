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
import {OrderItemPriceInfoInputType} from '../../order/OrderItemPriceInfo/OrderItemPriceInfoInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createOrderItemPriceInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz createOrderItemPriceInfo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderItem/orderItemPriceInfos/add?`, null, req);
  }
};
export {createOrderItemPriceInfo};


const updateOrderItemPriceInfo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateOrderItemPriceInfo method',
  args:{orderItemPriceInfoToBeUpdated: {type: OrderItemPriceInfoInputType},orderItemPriceInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderItem/orderItemPriceInfos/${args.orderItemPriceInfoId}?`, args.orderItemPriceInfoToBeUpdated, req);
  }
};
export {updateOrderItemPriceInfo};


const deleteOrderItemPriceInfoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteOrderItemPriceInfoByIdUpdated method',
  args:{orderItemPriceInfoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderItem/orderItemPriceInfos/${args.orderItemPriceInfoId}?`, null, req);
  }
};
export {deleteOrderItemPriceInfoByIdUpdated};
