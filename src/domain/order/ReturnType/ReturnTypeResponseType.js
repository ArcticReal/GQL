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

const ReturnTypeResponseType = new GraphQLObjectType({
  name: 'ReturnTypeResponseType',
  description: 'response type for ReturnType',

  fields: () => ({
    description: {type: GraphQLString},
    returnTypeId: {type: GraphQLString},
    sequenceId: {type: GraphQLString}
  })
});

export {ReturnTypeResponseType};
    