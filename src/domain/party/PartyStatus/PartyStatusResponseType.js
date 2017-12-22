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

const PartyStatusResponseType = new GraphQLObjectType({
  name: 'PartyStatusResponseType',
  description: 'response type for PartyStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    partyId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {PartyStatusResponseType};
    