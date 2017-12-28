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
import {GlAccountGroupMemberResponseType} from '../../accounting/GlAccountGroupMember/GlAccountGroupMemberResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createGlAccountGroupMember = {
  type: GlAccountGroupMemberResponseType,
  description: 'mutation for ofbiz createGlAccountGroupMember method',
  args:{glAccountGroupMemberToBeAdded: {type: GlAccountGroupMemberInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`accounting/glAccount/glAccountGroupMembers/add?`, args.glAccountGroupMemberToBeAdded, req);
  }
};
export {createGlAccountGroupMember};


const deleteGlAccountGroupMemberByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deleteGlAccountGroupMemberByIdUpdated method',
  args:{glAccountGroupMemberId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`accounting/glAccount/glAccountGroupMembers/${args.glAccountGroupMemberId}?`, null, req);
  }
};
export {deleteGlAccountGroupMemberByIdUpdated};


const updateGlAccountGroupMember = {
  type: GraphQLString,
  description: 'mutation for ofbiz updateGlAccountGroupMember method',
  args:{glAccountGroupMemberToBeUpdated: {type: GlAccountGroupMemberInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`accounting/glAccount/glAccountGroupMembers/${args.nullVal}?`, args.glAccountGroupMemberToBeUpdated, req);
  }
};
export {updateGlAccountGroupMember};
