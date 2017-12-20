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
import {SegmentGroupRoleInputType} from '../../marketing/SegmentGroupRole/SegmentGroupRoleInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createSegmentGroupRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createSegmentGroupRole method',
  args:{segmentGroupRoleToBeAdded: {type: SegmentGroupRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`marketing/segmentGroup/segmentGroupRoles/add?`, args.segmentGroupRoleToBeAdded, req);
  }
};
export {createSegmentGroupRole};


const updateSegmentGroupRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateSegmentGroupRole method',
  args:{segmentGroupRoleToBeUpdated: {type: SegmentGroupRoleInputType},roleTypeId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`marketing/segmentGroup/segmentGroupRoles/${args.roleTypeId}?`, args.segmentGroupRoleToBeUpdated, req);
  }
};
export {updateSegmentGroupRole};


const deleteSegmentGroupRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteSegmentGroupRoleByIdUpdated method',
  args:{segmentGroupRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`marketing/segmentGroup/segmentGroupRoles/${args.segmentGroupRoleId}?`, null, req);
  }
};
export {deleteSegmentGroupRoleByIdUpdated};
