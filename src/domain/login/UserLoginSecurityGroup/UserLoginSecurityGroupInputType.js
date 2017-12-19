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

const UserLoginSecurityGroupInputType = new GraphQLInputObjectType({
  name: 'UserLoginSecurityGroupInputType',
  description: 'input type for UserLoginSecurityGroup',

  fields: () => ({
    fromDate: {type: GraphQLString},
    groupId: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSecurityGroupInputType};
    