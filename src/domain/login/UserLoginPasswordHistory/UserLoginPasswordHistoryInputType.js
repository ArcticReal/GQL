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

const UserLoginPasswordHistoryInputType = new GraphQLInputObjectType({
  name: 'UserLoginPasswordHistoryInputType',
  description: 'input type for UserLoginPasswordHistory',

  fields: () => ({
    currentPassword: {type: GraphQLString},
    fromDate: {type: GraphQLString},
    thruDate: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginPasswordHistoryInputType};
    