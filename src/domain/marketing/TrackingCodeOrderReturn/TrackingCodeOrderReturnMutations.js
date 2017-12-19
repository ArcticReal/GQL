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
import {TrackingCodeOrderReturnInputType} from '../../marketing/TrackingCodeOrderReturn/TrackingCodeOrderReturnInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createTrackingCodeOrderReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz createTrackingCodeOrderReturn method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/trackingCode/trackingCodeOrderReturns/add?`, null, req);
  }
};
export {createTrackingCodeOrderReturn};


const updateTrackingCodeOrderReturn = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeOrderReturn method',
  args:{trackingCodeOrderReturnToBeUpdated: {type: TrackingCodeOrderReturnInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/trackingCode/trackingCodeOrderReturns/${args.nullVal}?`, args.trackingCodeOrderReturnToBeUpdated, req);
  }
};
export {updateTrackingCodeOrderReturn};


const deleteTrackingCodeOrderReturnByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCodeOrderReturnByIdUpdated method',
  args:{trackingCodeOrderReturnId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/trackingCode/trackingCodeOrderReturns/${args.trackingCodeOrderReturnId}?`, null, req);
  }
};
export {deleteTrackingCodeOrderReturnByIdUpdated};
