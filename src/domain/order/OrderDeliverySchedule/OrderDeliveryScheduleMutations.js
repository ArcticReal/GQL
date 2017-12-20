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
import {OrderDeliveryScheduleInputType} from '../../order/OrderDeliverySchedule/OrderDeliveryScheduleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createOrderDeliverySchedule = {
  type: ResopnseType,
  description: 'mutation for ofbiz createOrderDeliverySchedule method',
  args:{orderDeliveryScheduleToBeAdded: {type: OrderDeliveryScheduleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/orderDeliverySchedules/add?`, args.orderDeliveryScheduleToBeAdded, req);
  }
};
export {createOrderDeliverySchedule};


const deleteOrderDeliveryScheduleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteOrderDeliveryScheduleByIdUpdated method',
  args:{orderDeliveryScheduleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/orderDeliverySchedules/${args.orderDeliveryScheduleId}?`, null, req);
  }
};
export {deleteOrderDeliveryScheduleByIdUpdated};


const updateOrderDeliverySchedule = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateOrderDeliverySchedule method',
  args:{orderDeliveryScheduleToBeUpdated: {type: OrderDeliveryScheduleInputType},orderItemSeqId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/orderDeliverySchedules/${args.orderItemSeqId}?`, args.orderDeliveryScheduleToBeUpdated, req);
  }
};
export {updateOrderDeliverySchedule};
