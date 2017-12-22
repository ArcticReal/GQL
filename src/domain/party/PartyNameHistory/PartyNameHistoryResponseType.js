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

const PartyNameHistoryResponseType = new GraphQLObjectType({
  name: 'PartyNameHistoryResponseType',
  description: 'response type for PartyNameHistory',

  fields: () => ({
    changeDate: {type: GraphQLString},
    firstName: {type: GraphQLString},
    groupName: {type: GraphQLString},
    lastName: {type: GraphQLString},
    middleName: {type: GraphQLString},
    partyId: {type: GraphQLString},
    personalTitle: {type: GraphQLString},
    suffix: {type: GraphQLString}
  })
});

export {PartyNameHistoryResponseType};
    