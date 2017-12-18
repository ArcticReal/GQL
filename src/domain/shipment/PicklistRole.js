
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

import {PartyRoleType} from '../party/PartyRole.js';
import {PicklistType} from '../shipment/Picklist.js';
import {UserLoginType} from '../login/UserLogin.js';


const PicklistRoleType = new GraphQLObjectType({
  name: 'PicklistRoleType',
  description: 'Type for PicklistRole in shipment',

  fields: () => ({
    fromDate: {type: GraphQLString},
    picklist: {
      type: PicklistType,
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`shipment/picklists/find?picklistId=${picklistRole.picklistId}`)
    },
    roleTypeId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${picklistRole.lastModifiedByUserLogin}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${picklistRole.partyId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${picklistRole.createdByUserLogin}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PicklistRoleType};
    




const PicklistRoleInputType = new GraphQLInputObjectType({
  name: 'PicklistRoleInputType',
  description: 'input type for PicklistRole',

  fields: () => ({
    createdByUserLogin: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    lastModifiedByUserLogin: {type: GraphQLString},
    partyId: {type: GraphQLString},
    picklistId: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PicklistRoleInputType};
    