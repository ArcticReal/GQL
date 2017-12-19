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

const PartyIdentificationTypeInputType = new GraphQLInputObjectType({
  name: 'PartyIdentificationTypeInputType',
  description: 'input type for PartyIdentificationType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyIdentificationTypeId: {type: GraphQLString}
  })
});

export {PartyIdentificationTypeInputType};
    