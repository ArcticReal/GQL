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

const PartyClassificationGroupResponseType = new GraphQLObjectType({
  name: 'PartyClassificationGroupResponseType',
  description: 'response type for PartyClassificationGroup',

  fields: () => ({
    description: {type: GraphQLString},
    parentGroupId: {type: GraphQLString},
    partyClassificationGroupId: {type: GraphQLString},
    partyClassificationTypeId: {type: GraphQLString}
  })
});

export {PartyClassificationGroupResponseType};
    