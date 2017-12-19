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

const PartyRateInputType = new GraphQLInputObjectType({
  name: 'PartyRateInputType',
  description: 'input type for PartyRate',

  fields: () => ({
    defaultRate: {type: GraphQLBoolean},
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    percentageUsed: {type: GraphQLFloat},
    rateTypeId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {PartyRateInputType};
    