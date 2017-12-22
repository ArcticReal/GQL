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

const UserLoginSecurityGroupResponseType = new GraphQLObjectType({
  name: 'UserLoginSecurityGroupResponseType',
  description: 'response type for UserLoginSecurityGroup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    groupId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSecurityGroupResponseType};
    