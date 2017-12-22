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
import {TrackingCodeOrderResponseType} from '../../marketing/TrackingCodeOrder/TrackingCodeOrderResponseType.js';
import {TrackingCodeOrderInputType} from '../../marketing/TrackingCodeOrder/TrackingCodeOrderInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrackingCodeOrder = {
  type: TrackingCodeOrderResponseType,
  description: 'mutation for ofbiz createTrackingCodeOrder method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/trackingCode/trackingCodeOrders/add?`, null, req);
  }
};
export {createTrackingCodeOrder};


const updateTrackingCodeOrder = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeOrder method',
  args:{trackingCodeOrderToBeUpdated: {type: TrackingCodeOrderInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/trackingCode/trackingCodeOrders/${args.nullVal}?`, args.trackingCodeOrderToBeUpdated, req);
  }
};
export {updateTrackingCodeOrder};


const deleteTrackingCodeOrderByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCodeOrderByIdUpdated method',
  args:{trackingCodeOrderId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/trackingCode/trackingCodeOrders/${args.trackingCodeOrderId}?`, null, req);
  }
};
export {deleteTrackingCodeOrderByIdUpdated};
