
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

import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';
import {PicklistType} from '../../shipment/Picklist/PicklistType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
    