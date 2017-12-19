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

const PartyIdentificationInputType = new GraphQLInputObjectType({
  name: 'PartyIdentificationInputType',
  description: 'input type for PartyIdentification',

  fields: () => ({
    idValue: {type: GraphQLString},
    partyId: {type: GraphQLString},
    partyIdentificationTypeId: {type: GraphQLString}
  })
});

export {PartyIdentificationInputType};
    