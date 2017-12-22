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

const UserLoginSecurityQuestionResponseType = new GraphQLObjectType({
  name: 'UserLoginSecurityQuestionResponseType',
  description: 'response type for UserLoginSecurityQuestion',

  fields: () => ({
    questionEnumId: {type: GraphQLString},
    securityAnswer: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSecurityQuestionResponseType};
    