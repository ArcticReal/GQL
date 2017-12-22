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

const PartyGroupResponseType = new GraphQLObjectType({
  name: 'PartyGroupResponseType',
  description: 'response type for PartyGroup',

  fields: () => ({
    annualRevenue: {type: GraphQLFloat},
    comments: {type: GraphQLString},
    groupName: {type: GraphQLString},
    groupNameLocal: {type: GraphQLString},
    logoImageUrl: {type: GraphQLString},
    numEmployees: {type: GraphQLInt},
    officeSiteName: {type: GraphQLString},
    partyId: {type: GraphQLString},
    tickerSymbol: {type: GraphQLString}
  })
});

export {PartyGroupResponseType};
    