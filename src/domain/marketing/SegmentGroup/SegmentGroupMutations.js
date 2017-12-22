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
import {SegmentGroupInputType} from '../../marketing/SegmentGroup/SegmentGroupInputType.js';
import {SegmentGroupResponseType} from '../../marketing/SegmentGroup/SegmentGroupResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSegmentGroup = {
  type: SegmentGroupResponseType,
  description: 'mutation for ofbiz createSegmentGroup method',
  args:{segmentGroupToBeAdded: {type: SegmentGroupInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/segmentGroups/add?`, args.segmentGroupToBeAdded, req);
  }
};
export {createSegmentGroup};


const updateSegmentGroup = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroup method',
  args:{segmentGroupToBeUpdated: {type: SegmentGroupInputType},segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/segmentGroups/${args.segmentGroupId}?`, args.segmentGroupToBeUpdated, req);
  }
};
export {updateSegmentGroup};


const deleteSegmentGroupByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupByIdUpdated method',
  args:{segmentGroupId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/segmentGroups/${args.segmentGroupId}?`, null, req);
  }
};
export {deleteSegmentGroupByIdUpdated};
