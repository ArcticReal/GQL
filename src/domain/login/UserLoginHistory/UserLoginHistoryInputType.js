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

const UserLoginHistoryInputType = new GraphQLInputObjectType({
  name: 'UserLoginHistoryInputType',
  description: 'input type for UserLoginHistory',

  fields: () => ({
    fromDate: {type: GraphQLString},
    passwordUsed: {type: GraphQLString},
    successfulLogin: {type: GraphQLBoolean},
    thruDate: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    visitId: {type: GraphQLString}
  })
});

export {UserLoginHistoryInputType};
    