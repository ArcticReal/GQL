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

const PartyIdentificationResponseType = new GraphQLObjectType({
  name: 'PartyIdentificationResponseType',
  description: 'response type for PartyIdentification',

  fields: () => ({
    idValue: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyIdentificationTypeId: {type: GraphQLString}
  })
});

export {PartyIdentificationResponseType};
    