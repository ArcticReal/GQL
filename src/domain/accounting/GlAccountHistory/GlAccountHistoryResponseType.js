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

const GlAccountHistoryResponseType = new GraphQLObjectType({
  name: 'GlAccountHistoryResponseType',
  description: 'response type for GlAccountHistory',

  fields: () => ({
    customTimePeriodId: {type: GraphQLString},
    endingBalance: {type: GraphQLFloat},
    glAccountId: {type: GraphQLString},
    openingBalance: {type: GraphQLFloat},
    organizationPartyId: {type: GraphQLString},
    postedCredits: {type: GraphQLFloat},
    postedDebits: {type: GraphQLFloat}
  })
});

export {GlAccountHistoryResponseType};
    