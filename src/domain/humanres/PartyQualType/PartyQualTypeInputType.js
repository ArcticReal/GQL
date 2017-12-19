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

const PartyQualTypeInputType = new GraphQLInputObjectType({
  name: 'PartyQualTypeInputType',
  description: 'input type for PartyQualType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyQualTypeId: {type: GraphQLString}
  })
});

export {PartyQualTypeInputType};
    