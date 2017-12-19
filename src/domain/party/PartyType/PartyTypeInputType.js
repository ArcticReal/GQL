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

const PartyTypeInputType = new GraphQLInputObjectType({
  name: 'PartyTypeInputType',
  description: 'input type for PartyType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyTypeId: {type: GraphQLString}
  })
});

export {PartyTypeInputType};
    