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
import {SegmentGroupTypeResponseType} from '../../marketing/SegmentGroupType/SegmentGroupTypeResponseType.js';
import {SegmentGroupTypeInputType} from '../../marketing/SegmentGroupType/SegmentGroupTypeInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSegmentGroupType = {
  type: SegmentGroupTypeResponseType,
  description: 'mutation for ofbiz createSegmentGroupType method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/segmentGroup/segmentGroupTypes/add?`, null, req);
  }
};
export {createSegmentGroupType};


const updateSegmentGroupType = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupType method',
  args:{segmentGroupTypeToBeUpdated: {type: SegmentGroupTypeInputType},segmentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/segmentGroup/segmentGroupTypes/${args.segmentGroupTypeId}?`, args.segmentGroupTypeToBeUpdated, req);
  }
};
export {updateSegmentGroupType};


const deleteSegmentGroupTypeByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupTypeByIdUpdated method',
  args:{segmentGroupTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/segmentGroup/segmentGroupTypes/${args.segmentGroupTypeId}?`, null, req);
  }
};
export {deleteSegmentGroupTypeByIdUpdated};