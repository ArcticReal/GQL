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

const PartyGroupInputType = new GraphQLInputObjectType({
  name: 'PartyGroupInputType',
  description: 'input type for PartyGroup',

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

export {PartyGroupInputType};
    