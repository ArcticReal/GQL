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

const CharacterSetInputType = new GraphQLInputObjectType({
  name: 'CharacterSetInputType',
  description: 'input type for CharacterSet',

  fields: () => ({
    characterSetId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CharacterSetInputType};
    