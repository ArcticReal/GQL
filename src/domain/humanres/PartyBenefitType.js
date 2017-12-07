
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {BenefitTypeType} from '../humanres/BenefitTypeType.js';
import {PartyRoleType} from '../party/PartyRoleType.js';


const PartyBenefitType = new GraphQLObjectType({
  name: 'PartyBenefitType',
  description: 'Type for PartyBenefit in humanres',

  fields: () => ({
    roleTypeIdTo: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyFrom: {
      type: PartyRoleType,
      args : {partyIdFrom: {type: GraphQLString}},
      resolve: (partyBenefit, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${partyBenefit.partyIdFrom}`)
    },
    availableTime: {type: GraphQLInt},
    cost: {type: GraphQLFloat},
    actualEmployerPaidPercent: {type: GraphQLFloat},
    benefitType: {
      type: BenefitTypeType,
      args : {benefitTypeId: {type: GraphQLString}},
      resolve: (partyBenefit, args, {loaders}) => loaders.ofbiz.load(`benefitTypes/find?benefitTypeId=${partyBenefit.benefitTypeId}`)
    },
    periodTypeId: {type: GraphQLString},
    partyTo: {
      type: PartyRoleType,
      args : {partyIdTo: {type: GraphQLString}},
      resolve: (partyBenefit, args, {loaders}) => loaders.ofbiz.load(`partyRoles/find?partyId=${partyBenefit.partyIdTo}`)
    },
    roleTypeIdFrom: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyBenefitType};
    