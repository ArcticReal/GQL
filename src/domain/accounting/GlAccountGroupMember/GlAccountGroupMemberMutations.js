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
import {GlAccountGroupMemberInputType} from '../../accounting/GlAccountGroupMember/GlAccountGroupMemberInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountGroupMember = {
  type: ResopnseType,
  description: 'mutation for ofbiz createGlAccountGroupMember method',
  args:{glAccountGroupMemberToBeAdded: {type: GlAccountGroupMemberInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountGroupMembers/add?`, args.glAccountGroupMemberToBeAdded, req);
  }
};
export {createGlAccountGroupMember};


const deleteGlAccountGroupMemberByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteGlAccountGroupMemberByIdUpdated method',
  args:{glAccountGroupMemberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountGroupMembers/${args.glAccountGroupMemberId}?`, null, req);
  }
};
export {deleteGlAccountGroupMemberByIdUpdated};


const updateGlAccountGroupMember = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateGlAccountGroupMember method',
  args:{glAccountGroupMemberToBeUpdated: {type: GlAccountGroupMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountGroupMembers/${args.nullVal}?`, args.glAccountGroupMemberToBeUpdated, req);
  }
};
export {updateGlAccountGroupMember};
