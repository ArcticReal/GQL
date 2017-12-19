
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


const WebSiteRoleType = new GraphQLObjectType({
  name: 'WebSiteRoleType',
  description: 'Type for WebSiteRole in content',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    sequenceNum: {type: GraphQLInt},
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (webSiteRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${webSiteRole.partyId}`)
    },
    webSiteId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {WebSiteRoleType};
    