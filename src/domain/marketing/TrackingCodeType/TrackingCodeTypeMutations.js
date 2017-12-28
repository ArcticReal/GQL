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
import {TrackingCodeTypeInputType} from '../../marketing/TrackingCodeType/TrackingCodeTypeInputType.js';
import {TrackingCodeTypeResponseType} from '../../marketing/TrackingCodeType/TrackingCodeTypeResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createTrackingCodeType = {
  type: TrackingCodeTypeResponseType,
  description: 'mutation for ofbiz createTrackingCodeType method',
  args:{trackingCodeTypeToBeAdded: {type: TrackingCodeTypeInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/trackingCode/trackingCodeTypes/add?`, args.trackingCodeTypeToBeAdded, req);
  }
};
export {createTrackingCodeType};


const updateTrackingCodeType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateTrackingCodeType method',
  args:{trackingCodeTypeToBeUpdated: {type: TrackingCodeTypeInputType},trackingCodeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/trackingCode/trackingCodeTypes/${args.trackingCodeTypeId}?`, args.trackingCodeTypeToBeUpdated, req);
  }
};
export {updateTrackingCodeType};


const deleteTrackingCodeTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteTrackingCodeTypeByIdUpdated method',
  args:{trackingCodeTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/trackingCode/trackingCodeTypes/${args.trackingCodeTypeId}?`, null, req);
  }
};
export {deleteTrackingCodeTypeByIdUpdated};
