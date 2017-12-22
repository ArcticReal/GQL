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

const ReturnHeaderTypeResponseType = new GraphQLObjectType({
  name: 'ReturnHeaderTypeResponseType',
  description: 'response type for ReturnHeaderType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString}
  })
});

export {ReturnHeaderTypeResponseType};
    