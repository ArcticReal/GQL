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
import {SegmentGroupClassificationInputType} from '../../marketing/SegmentGroupClassification/SegmentGroupClassificationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createSegmentGroupClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz createSegmentGroupClassification method',
  args:{segmentGroupClassificationToBeAdded: {type: SegmentGroupClassificationInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/segmentGroup/segmentGroupClassifications/add?`, args.segmentGroupClassificationToBeAdded, req);
  }
};
export {createSegmentGroupClassification};


const updateSegmentGroupClassification = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateSegmentGroupClassification method',
  args:{segmentGroupClassificationToBeUpdated: {type: SegmentGroupClassificationInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/segmentGroup/segmentGroupClassifications/${args.nullVal}?`, args.segmentGroupClassificationToBeUpdated, req);
  }
};
export {updateSegmentGroupClassification};


const deleteSegmentGroupClassificationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteSegmentGroupClassificationByIdUpdated method',
  args:{segmentGroupClassificationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/segmentGroup/segmentGroupClassifications/${args.segmentGroupClassificationId}?`, null, req);
  }
};
export {deleteSegmentGroupClassificationByIdUpdated};
