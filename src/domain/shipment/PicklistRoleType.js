
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyRoleType} from '../party/PartyRoleType.js';
import {PicklistType} from '../shipment/PicklistType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const PicklistRoleType = new GraphQLObjectType({
  name: 'PicklistRoleType',
  description: 'Type for PicklistRole in shipment',

  fields: () => ({
    fromDate: {type: GraphQLString},
    picklist: {
      type: PicklistType,
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`picklists/find?picklistId=${picklistRole.picklistId}`)
    },
    roleTypeId: {type: GraphQLString},
    lastModifiedByUserLogin: {
      type: UserLoginType,
      args : {lastModifiedByUserLogin: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${picklistRole.lastModifiedByUserLogin}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${picklistRole.partyId}`)
    },
    createdByUserLogin: {
      type: UserLoginType,
      args : {createdByUserLogin: {type: GraphQLString}},
      resolve: (picklistRole, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${picklistRole.createdByUserLogin}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {PicklistRoleType};
    