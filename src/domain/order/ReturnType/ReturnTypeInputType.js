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

const ReturnTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnTypeInputType',
  description: 'input type for ReturnType',

  fields: () => ({
    description: {type: GraphQLString},
    returnTypeId: {type: GraphQLString},
    sequenceId: {type: GraphQLString}
  })
});

export {ReturnTypeInputType};
    