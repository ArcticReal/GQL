
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
    




const UserLoginSecurityQuestionInputType = new GraphQLInputObjectType({
  name: 'UserLoginSecurityQuestionInputType',
  description: 'input type for UserLoginSecurityQuestion in login',

  fields: () => ({
    userLoginId: {type: GraphQLString},
    questionEnumId: {type: GraphQLString},
    securityAnswer: {type: GraphQLString}
  })
});

export {UserLoginSecurityQuestionInputType};
    