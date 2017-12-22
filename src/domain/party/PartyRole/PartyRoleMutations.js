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
import {PartyRoleInputType} from '../../party/PartyRole/PartyRoleInputType.js';
import {PartyRoleResponseType} from '../../party/PartyRole/PartyRoleResponseType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResponseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyRole = {
  type: PartyRoleResponseType,
  description: 'mutation for ofbiz createPartyRole method',
  args:{partyRoleToBeAdded: {type: PartyRoleInputType}},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyRoles/add?`, args.partyRoleToBeAdded, req);
  }
};
export {createPartyRole};


const updatePartyRole = {
  type: GraphQLString,
  description: 'mutation for ofbiz updatePartyRole method',
  args:{partyRoleToBeUpdated: {type: PartyRoleInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyRoles/${args.nullVal}?`, args.partyRoleToBeUpdated, req);
  }
};
export {updatePartyRole};


const deletePartyRoleByIdUpdated = {
  type: GraphQLString,
  description: 'mutation for ofbiz deletePartyRoleByIdUpdated method',
  args:{partyRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyRoles/${args.partyRoleId}?`, null, req);
  }
};
export {deletePartyRoleByIdUpdated};
