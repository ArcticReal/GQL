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

const PartyBenefitResponseType = new GraphQLObjectType({
  name: 'PartyBenefitResponseType',
  description: 'response type for PartyBenefit',

  fields: () => ({
    actualEmployerPaidPercent: {type: GraphQLFloat},
    availableTime: {type: GraphQLInt},
    benefitTypeId: {type: GraphQLString},
    cost: {type: GraphQLFloat},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    periodTypeId: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyBenefitResponseType};
    