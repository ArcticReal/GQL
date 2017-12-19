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
import {PartyInvitationInputType} from '../../party/PartyInvitation/PartyInvitationInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';


const createPartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz createPartyInvitation method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyInvitations/add?`, null, req);
  }
};
export {createPartyInvitation};


const updatePartyInvitation = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyInvitation method',
  args:{partyInvitationToBeUpdated: {type: PartyInvitationInputType},partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyInvitations/${args.partyInvitationId}?`, args.partyInvitationToBeUpdated, req);
  }
};
export {updatePartyInvitation};


const deletePartyInvitationByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyInvitationByIdUpdated method',
  args:{partyInvitationId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyInvitations/${args.partyInvitationId}?`, null, req);
  }
};
export {deletePartyInvitationByIdUpdated};
