
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const UserLoginSecurityQuestionType = new GraphQLObjectType({
  name: 'UserLoginSecurityQuestionType',
  description: 'Type for UserLoginSecurityQuestion in login',

  fields: () => ({
    userLoginId: {type: GraphQLString},
    questionEnumId: {type: GraphQLString},
    securityAnswer: {type: GraphQLString}
  })
});

export {UserLoginSecurityQuestionType};
    