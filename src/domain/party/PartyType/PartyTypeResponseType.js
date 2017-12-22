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

const PartyTypeResponseType = new GraphQLObjectType({
  name: 'PartyTypeResponseType',
  description: 'response type for PartyType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyTypeId: {type: GraphQLString}
  })
});

export {PartyTypeResponseType};
    