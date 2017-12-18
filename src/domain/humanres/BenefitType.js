
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

import {PartyBenefitType} from '../humanres/PartyBenefit.js';


const BenefitTypeType = new GraphQLObjectType({
  name: 'BenefitTypeType',
  description: 'Type for BenefitType in humanres',

  fields: () => ({
    parentType: {
      type: BenefitTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (benefitType, args, {loaders}) => loaders.ofbiz.load(`humanres/benefitTypes/find?benefitTypeId=${benefitType.parentTypeId}`)
    },
    employerPaidPercentage: {type: GraphQLFloat},
    hasTable: {type: GraphQLBoolean},
    benefitName: {type: GraphQLString},
    benefitTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    benefitTypes: {
      type: new GraphQLList(BenefitTypeType),
      args : {},
      resolve: (benefitType, args, {loaders}) => loaders.ofbizArray.load(`humanres/benefitTypes/find?benefitTypeId=${benefitType.benefitTypeId}`)
    },
    partyBenefits: {
      type: new GraphQLList(PartyBenefitType),
      args : {},
      resolve: (benefitType, args, {loaders}) => loaders.ofbizArray.load(`humanres/partyBenefits/find?benefitTypeId=${benefitType.benefitTypeId}`)
    }
  })
});

export {BenefitTypeType};
    




const BenefitTypeInputType = new GraphQLInputObjectType({
  name: 'BenefitTypeInputType',
  description: 'input type for BenefitType',

  fields: () => ({
    benefitName: {type: GraphQLString},
    benefitTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    employerPaidPercentage: {type: GraphQLFloat},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString}
  })
});

export {BenefitTypeInputType};
    