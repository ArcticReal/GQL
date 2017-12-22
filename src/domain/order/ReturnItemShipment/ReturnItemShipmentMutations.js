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
import {ReturnItemShipmentResponseType} from '../../order/ReturnItemShipment/ReturnItemShipmentResponseType.js';
import {ReturnItemShipmentInputType} from '../../order/ReturnItemShipment/ReturnItemShipmentInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createReturnItemShipment = {
  type: ReturnItemShipmentResponseType,
  description: 'mutation for ofbiz createReturnItemShipment method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`order/returnItem/returnItemShipments/add?`, null, req);
  }
};
export {createReturnItemShipment};


const updateReturnItemShipment = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateReturnItemShipment method',
  args:{returnItemShipmentToBeUpdated: {type: ReturnItemShipmentInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`order/returnItem/returnItemShipments/${args.nullVal}?`, args.returnItemShipmentToBeUpdated, req);
  }
};
export {updateReturnItemShipment};


const deleteReturnItemShipmentByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteReturnItemShipmentByIdUpdated method',
  args:{returnItemShipmentId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`order/returnItem/returnItemShipments/${args.returnItemShipmentId}?`, null, req);
  }
};
export {deleteReturnItemShipmentByIdUpdated};
