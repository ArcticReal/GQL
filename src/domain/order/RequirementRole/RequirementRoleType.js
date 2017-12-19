
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

import {RequirementType} from '../../order/Requirement/RequirementType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';


const RequirementRoleType = new GraphQLObjectType({
  name: 'RequirementRoleType',
  description: 'Type for RequirementRole in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementRole, args, {loaders}) => loaders.ofbiz.load(`order/requirements/find?requirementId=${requirementRole.requirementId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (requirementRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${requirementRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {RequirementRoleType};
    