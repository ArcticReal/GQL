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
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createPartyRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz createPartyRole method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`party/party/partyRoles/add?`, null, req);
  }
};
export {createPartyRole};


const updatePartyRole = {
  type: ResopnseType,
  description: 'mutation for ofbiz updatePartyRole method',
  args:{partyRoleToBeUpdated: {type: PartyRoleInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`party/party/partyRoles/${args.nullVal}?`, args.partyRoleToBeUpdated, req);
  }
};
export {updatePartyRole};


const deletePartyRoleByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deletePartyRoleByIdUpdated method',
  args:{partyRoleId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`party/party/partyRoles/${args.partyRoleId}?`, null, req);
  }
};
export {deletePartyRoleByIdUpdated};
