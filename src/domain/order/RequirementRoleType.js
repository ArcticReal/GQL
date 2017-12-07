
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementType} from '../order/RequirementType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';


const RequirementRoleType = new GraphQLObjectType({
  name: 'RequirementRoleType',
  description: 'Type for RequirementRole in order',

  fields: () => ({
    fromDate: {type: GraphQLString},
    roleTypeId: {type: GraphQLString},
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementRole, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${requirementRole.requirementId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (requirementRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${requirementRole.partyId}`)
    },
    thruDate: {type: GraphQLString}
  })
});

export {RequirementRoleType};
    