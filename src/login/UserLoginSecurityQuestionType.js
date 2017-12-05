
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const UserLoginSecurityQuestion = new GraphQLObjectType({
  name: 'UserLoginSecurityQuestionType',
  description: 'Type for UserLoginSecurityQuestion in login',

  fields: () => ({
    userLoginId: {type: GraphQLString},
    questionEnumId: {type: GraphQLString},
    securityAnswer: {type: GraphQLString}
  })
});

export {UserLoginSecurityQuestion};
    