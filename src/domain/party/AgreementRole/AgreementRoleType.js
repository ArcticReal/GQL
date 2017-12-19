
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

import {AgreementType} from '../../party/Agreement/AgreementType.js';
import {PartyRoleType} from '../../party/PartyRole/PartyRoleType.js';


const AgreementRoleType = new GraphQLObjectType({
  name: 'AgreementRoleType',
  description: 'Type for AgreementRole in party',

  fields: () => ({
    roleTypeId: {type: GraphQLString},
    agreement: {
      type: AgreementType,
      args : {agreementId: {type: GraphQLString}},
      resolve: (agreementRole, args, {loaders}) => loaders.ofbiz.load(`party/agreements/find?agreementId=${agreementRole.agreementId}`)
    },
    party: {
      type: PartyRoleType,
      args : {partyId: {type: GraphQLString}},
      resolve: (agreementRole, args, {loaders}) => loaders.ofbiz.load(`party/party/partyRoles/find?partyId=${agreementRole.partyId}`)
    }
  })
});

export {AgreementRoleType};
    