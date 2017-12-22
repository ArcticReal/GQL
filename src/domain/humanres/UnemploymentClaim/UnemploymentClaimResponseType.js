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

const UnemploymentClaimResponseType = new GraphQLObjectType({
  name: 'UnemploymentClaimResponseType',
  description: 'response type for UnemploymentClaim',

  fields: () => ({
    description: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    partyIdFrom: {type: GraphQLString},
    partyIdTo: {type: GraphQLString},
    roleTypeIdFrom: {type: GraphQLString},
    roleTypeIdTo: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    unemploymentClaimDate: {type: GraphQLString},
    unemploymentClaimId: {type: GraphQLString}
  })
});

export {UnemploymentClaimResponseType};
    