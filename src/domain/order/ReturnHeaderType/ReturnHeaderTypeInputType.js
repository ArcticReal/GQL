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

const ReturnHeaderTypeInputType = new GraphQLInputObjectType({
  name: 'ReturnHeaderTypeInputType',
  description: 'input type for ReturnHeaderType',

  fields: () => ({
    description: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    returnHeaderTypeId: {type: GraphQLString}
  })
});

export {ReturnHeaderTypeInputType};
    