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

const PartyClassificationGroupInputType = new GraphQLInputObjectType({
  name: 'PartyClassificationGroupInputType',
  description: 'input type for PartyClassificationGroup',

  fields: () => ({
    description: {type: GraphQLString},
    parentGroupId: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString}
  })
});

export {PartyClassificationGroupInputType};
    