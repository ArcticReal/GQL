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

const PartyQualTypeResponseType = new GraphQLObjectType({
  name: 'PartyQualTypeResponseType',
  description: 'response type for PartyQualType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyQualTypeId: {type: GraphQLString}
  })
});

export {PartyQualTypeResponseType};
    