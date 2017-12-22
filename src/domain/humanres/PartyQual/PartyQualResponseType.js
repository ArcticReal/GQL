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

const PartyQualResponseType = new GraphQLObjectType({
  name: 'PartyQualResponseType',
  description: 'response type for PartyQual',

  fields: () => ({
    fromDate: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyQualTypeId: {type: GraphQLString},
    qualificationDesc: {type: GraphQLString},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    title: {type: GraphQLString},
    verifStatusId: {type: GraphQLString}
  })
});

export {PartyQualResponseType};
    