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
import {SegmentGroupGeoResponseType} from '../../marketing/SegmentGroupGeo/SegmentGroupGeoResponseType.js';
import {SegmentGroupGeoInputType} from '../../marketing/SegmentGroupGeo/SegmentGroupGeoInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSegmentGroupGeo = {
  type: SegmentGroupGeoResponseType,
  description: 'mutation for ofbiz createSegmentGroupGeo method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/segmentGroup/segmentGroupGeos/add?`, null, req);
  }
};
export {createSegmentGroupGeo};


const updateSegmentGroupGeo = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupGeo method',
  args:{segmentGroupGeoToBeUpdated: {type: SegmentGroupGeoInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/segmentGroup/segmentGroupGeos/${args.nullVal}?`, args.segmentGroupGeoToBeUpdated, req);
  }
};
export {updateSegmentGroupGeo};


const deleteSegmentGroupGeoByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupGeoByIdUpdated method',
  args:{segmentGroupGeoId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/segmentGroup/segmentGroupGeos/${args.segmentGroupGeoId}?`, null, req);
  }
};
export {deleteSegmentGroupGeoByIdUpdated};
