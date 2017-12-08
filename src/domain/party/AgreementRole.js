
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

import {AgreementType} from '../party/Agreement.js';
import {PartyRoleType} from '../party/PartyRole.js';


const AgreementRoleType = new GraphQLObjectType({
  name: 'AgreementRoleType',
  description: 'Type for AgreementRole in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementRole, args, {loaders}) => loaders.ofbiz.load(`agreements/find?agreementId=${agreementRole.agreementId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (agreementRole, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${agreementRole.partyId}`)
    }
  })
});

export {AgreementRoleType};
    




const AgreementRoleInputType = new GraphQLInputObjectType({
  name: 'AgreementRoleInputType',
  description: 'input type for AgreementRole in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    agreementId: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {AgreementRoleInputType};
    