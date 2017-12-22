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

const CharacterSetResponseType = new GraphQLObjectType({
  name: 'CharacterSetResponseType',
  description: 'response type for CharacterSet',

  fields: () => ({
    characterSetId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CharacterSetResponseType};
    