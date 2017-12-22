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

const UserLoginSessionResponseType = new GraphQLObjectType({
  name: 'UserLoginSessionResponseType',
  description: 'response type for UserLoginSession',

  fields: () => ({
    savedDate: {type: GraphQLString},
    sessionData: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSessionResponseType};
    