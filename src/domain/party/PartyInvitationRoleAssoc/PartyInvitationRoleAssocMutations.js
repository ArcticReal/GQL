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
import {PartyInvitationRoleAssocResponseType} from '../../party/PartyInvitationRoleAssoc/PartyInvitationRoleAssocResponseType.js';
import {PartyInvitationRoleAssocInputType} from '../../party/PartyInvitationRoleAssoc/PartyInvitationRoleAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyInvitationRoleAssoc = {
  type: PartyInvitationRoleAssocResponseType,
  description: 'mutation for ofbiz createPartyInvitationRoleAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyInvitationRoleAssocs/add?`, null, req);
  }
};
export {createPartyInvitationRoleAssoc};


const updatePartyInvitationRoleAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyInvitationRoleAssoc method',
  args:{partyInvitationRoleAssocToBeUpdated: {type: PartyInvitationRoleAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyInvitationRoleAssocs/${args.nullVal}?`, args.partyInvitationRoleAssocToBeUpdated, req);
  }
};
export {updatePartyInvitationRoleAssoc};


const deletePartyInvitationRoleAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyInvitationRoleAssocByIdUpdated method',
  args:{partyInvitationRoleAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyInvitationRoleAssocs/${args.partyInvitationRoleAssocId}?`, null, req);
  }
};
export {deletePartyInvitationRoleAssocByIdUpdated};
