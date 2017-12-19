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

const SecurityGroupInputType = new GraphQLInputObjectType({
  name: 'SecurityGroupInputType',
  description: 'input type for SecurityGroup',

  fields: () => ({
    description: {type: GraphQLString},
    groupId: {type: GraphQLString}
  })
});

export {SecurityGroupInputType};
    