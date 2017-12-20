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
import {PartyInvitationGroupAssocInputType} from '../../party/PartyInvitationGroupAssoc/PartyInvitationGroupAssocInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyInvitationGroupAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyInvitationGroupAssoc method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyInvitationGroupAssocs/add?`, null, req);
  }
};
export {createPartyInvitationGroupAssoc};


const updatePartyInvitationGroupAssoc = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyInvitationGroupAssoc method',
  args:{partyInvitationGroupAssocToBeUpdated: {type: PartyInvitationGroupAssocInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyInvitationGroupAssocs/${args.nullVal}?`, args.partyInvitationGroupAssocToBeUpdated, req);
  }
};
export {updatePartyInvitationGroupAssoc};


const deletePartyInvitationGroupAssocByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyInvitationGroupAssocByIdUpdated method',
  args:{partyInvitationGroupAssocId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyInvitationGroupAssocs/${args.partyInvitationGroupAssocId}?`, null, req);
  }
};
export {deletePartyInvitationGroupAssocByIdUpdated};
