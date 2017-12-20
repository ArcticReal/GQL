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
import {TrackingCodeInputType} from '../../marketing/TrackingCode/TrackingCodeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrackingCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz createTrackingCode method',
  args:{trackingCodeToBeAdded: {type: TrackingCodeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/trackingCodes/add?`, args.trackingCodeToBeAdded, req);
  }
};
export {createTrackingCode};


const updateTrackingCode = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateTrackingCode method',
  args:{trackingCodeToBeUpdated: {type: TrackingCodeInputType},trackingCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/trackingCodes/${args.trackingCodeId}?`, args.trackingCodeToBeUpdated, req);
  }
};
export {updateTrackingCode};


const deleteTrackingCodeByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteTrackingCodeByIdUpdated method',
  args:{trackingCodeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/trackingCodes/${args.trackingCodeId}?`, null, req);
  }
};
export {deleteTrackingCodeByIdUpdated};
