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
import {TrackingCodeVisitInputType} from '../../marketing/TrackingCodeVisit/TrackingCodeVisitInputType.js';
import {TrackingCodeVisitResponseType} from '../../marketing/TrackingCodeVisit/TrackingCodeVisitResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrackingCodeVisit = {
  type: TrackingCodeVisitResponseType,
  description: 'mutation for ofbiz createTrackingCodeVisit method',
  args:{trackingCodeVisitToBeAdded: {type: TrackingCodeVisitInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/trackingCode/trackingCodeVisits/add?`, args.trackingCodeVisitToBeAdded, req);
  }
};
export {createTrackingCodeVisit};


const deleteTrackingCodeVisitByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCodeVisitByIdUpdated method',
  args:{trackingCodeVisitId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/trackingCode/trackingCodeVisits/${args.trackingCodeVisitId}?`, null, req);
  }
};
export {deleteTrackingCodeVisitByIdUpdated};


const updateTrackingCodeVisit = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeVisit method',
  args:{trackingCodeVisitToBeUpdated: {type: TrackingCodeVisitInputType},visitId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/trackingCode/trackingCodeVisits/${args.visitId}?`, args.trackingCodeVisitToBeUpdated, req);
  }
};
export {updateTrackingCodeVisit};
