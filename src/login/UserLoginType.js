
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const UserLogin = new GraphQLObjectType({
  name: 'UserLoginType',
  description: 'Type for UserLogin in login',

  fields: () => ({
    successiveFailedLogins: {type: GraphQLInt},
    passwordHint: {type: GraphQLString},
    externalAuthId: {type: GraphQLString},
    lastTimeZone: {type: GraphQLString},
    enabled: {type: GraphQLBoolean},
    lastLocale: {type: GraphQLString},
    currentPassword: {type: GraphQLString},
    userLoginId: {type: GraphQLString},
    isSystem: {type: GraphQLBoolean},
    disabledDateTime: {type: GraphQLString},
    disabledBy: {type: GraphQLString},
    hasLoggedOut: {type: GraphQLBoolean},
    userLdapDn: {type: GraphQLString},
    requirePasswordChange: {type: GraphQLBoolean},
    lastCurrencyUom: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {UserLogin};
    