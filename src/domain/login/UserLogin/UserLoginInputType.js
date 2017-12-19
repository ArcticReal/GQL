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

const UserLoginInputType = new GraphQLInputObjectType({
  name: 'UserLoginInputType',
  description: 'input type for UserLogin',

  fields: () => ({
    currentPassword: {type: GraphQLString},
    disabledBy: {type: GraphQLString},
    disabledDateTime: {type: GraphQLString},
    enabled: {type: GraphQLBoolean},
    externalAuthId: {type: GraphQLString},
    hasLoggedOut: {type: GraphQLBoolean},
    isSystem: {type: GraphQLBoolean},
    lastCurrencyUom: {type: GraphQLString},
    lastLocale: {type: GraphQLString},
    lastTimeZone: {type: GraphQLString},
    partyId: {type: GraphQLString},
    passwordHint: {type: GraphQLString},
    requirePasswordChange: {type: GraphQLBoolean},
    successiveFailedLogins: {type: GraphQLInt},
    userLdapDn: {type: GraphQLString},
    userLoginId: {type: GraphQLString}
  })
});

export {UserLoginInputType};
    