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
import {PartyInvitationRoleAssocInputType} from '../../party/PartyInvitationRoleAssoc/PartyInvitationRoleAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyInvitationRoleAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyInvitationRoleAssoc method',
  args:{partyInvitationRoleAssocToBeAdded: {type: PartyInvitationRoleAssocInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyInvitationRoleAssocs/add?`, args.partyInvitationRoleAssocToBeAdded, req);
  }
};
export {createPartyInvitationRoleAssoc};


const updatePartyInvitationRoleAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyInvitationRoleAssoc method',
  args:{partyInvitationRoleAssocToBeUpdated: {type: PartyInvitationRoleAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyInvitationRoleAssocs/${args.nullVal}?`, args.partyInvitationRoleAssocToBeUpdated, req);
  }
};
export {updatePartyInvitationRoleAssoc};


const deletePartyInvitationRoleAssocByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyInvitationRoleAssocByIdUpdated method',
  args:{partyInvitationRoleAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyInvitationRoleAssocs/${args.partyInvitationRoleAssocId}?`, null, req);
  }
};
export {deletePartyInvitationRoleAssocByIdUpdated};
