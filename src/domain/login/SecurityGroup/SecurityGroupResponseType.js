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

const SecurityGroupResponseType = new GraphQLObjectType({
  name: 'SecurityGroupResponseType',
  description: 'response type for SecurityGroup',

  fields: () => ({
    description: {type: GraphQLString},
    groupId: {type: GraphQLString}
  })
});

export {SecurityGroupResponseType};
    