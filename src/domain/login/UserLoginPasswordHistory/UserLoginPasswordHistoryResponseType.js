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

const UserLoginPasswordHistoryResponseType = new GraphQLObjectType({
  name: 'UserLoginPasswordHistoryResponseType',
  description: 'response type for UserLoginPasswordHistory',

  fields: () => ({
    currentPassword: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginPasswordHistoryResponseType};
    