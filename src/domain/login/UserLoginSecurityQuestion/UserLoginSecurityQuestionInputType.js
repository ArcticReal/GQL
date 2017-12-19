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

const UserLoginSecurityQuestionInputType = new GraphQLInputObjectType({
  name: 'UserLoginSecurityQuestionInputType',
  description: 'input type for UserLoginSecurityQuestion',

  fields: () => ({
    questionEnumId: {type: GraphQLString},
    securityAnswer: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginSecurityQuestionInputType};
    