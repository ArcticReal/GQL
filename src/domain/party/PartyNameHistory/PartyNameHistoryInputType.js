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

const PartyNameHistoryInputType = new GraphQLInputObjectType({
  name: 'PartyNameHistoryInputType',
  description: 'input type for PartyNameHistory',

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

export {PartyNameHistoryInputType};
    