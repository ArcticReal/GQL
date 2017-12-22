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

const PartyIdentificationTypeResponseType = new GraphQLObjectType({
  name: 'PartyIdentificationTypeResponseType',
  description: 'response type for PartyIdentificationType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyIdentificationTypeId: {type: GraphQLString}
  })
});

export {PartyIdentificationTypeResponseType};
    