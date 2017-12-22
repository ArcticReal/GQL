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
import {PartyInvitationGroupAssocResponseType} from '../../party/PartyInvitationGroupAssoc/PartyInvitationGroupAssocResponseType.js';
import {PartyInvitationGroupAssocInputType} from '../../party/PartyInvitationGroupAssoc/PartyInvitationGroupAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyInvitationGroupAssoc = {
  type: PartyInvitationGroupAssocResponseType,
  description: 'mutation for ofbiz createPartyInvitationGroupAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyInvitationGroupAssocs/add?`, null, req);
  }
};
export {createPartyInvitationGroupAssoc};


const updatePartyInvitationGroupAssoc = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyInvitationGroupAssoc method',
  args:{partyInvitationGroupAssocToBeUpdated: {type: PartyInvitationGroupAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyInvitationGroupAssocs/${args.nullVal}?`, args.partyInvitationGroupAssocToBeUpdated, req);
  }
};
export {updatePartyInvitationGroupAssoc};


const deletePartyInvitationGroupAssocByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyInvitationGroupAssocByIdUpdated method',
  args:{partyInvitationGroupAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyInvitationGroupAssocs/${args.partyInvitationGroupAssocId}?`, null, req);
  }
};
export {deletePartyInvitationGroupAssocByIdUpdated};
