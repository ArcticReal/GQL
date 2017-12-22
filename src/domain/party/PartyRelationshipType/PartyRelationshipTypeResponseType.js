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

const PartyRelationshipTypeResponseType = new GraphQLObjectType({
  name: 'PartyRelationshipTypeResponseType',
  description: 'response type for PartyRelationshipType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    partyRelationshipName: {type: GraphQLString},
    partyRelationshipTypeId: {type: GraphQLString},
    roleTypeIdValidFrom: {type: GraphQLString},
    roleTypeIdValidTo: {type: GraphQLString}
  })
});

export {PartyRelationshipTypeResponseType};
    