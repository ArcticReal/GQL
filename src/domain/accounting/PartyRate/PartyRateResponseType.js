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

const PartyRateResponseType = new GraphQLObjectType({
  name: 'PartyRateResponseType',
  description: 'response type for PartyRate',

  fields: () => ({
    defaultRate: {type: GraphQLBoolean},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    percentageUsed: {type: GraphQLFloat},
    rateTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyRateResponseType};
    