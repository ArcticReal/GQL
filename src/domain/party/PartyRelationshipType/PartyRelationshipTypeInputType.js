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

const PartyRelationshipTypeInputType = new GraphQLInputObjectType({
  name: 'PartyRelationshipTypeInputType',
  description: 'input type for PartyRelationshipType',

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

export {PartyRelationshipTypeInputType};
    