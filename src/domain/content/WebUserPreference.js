
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

import {PartyType} from '../party/Party.js';
import {WebPreferenceTypeType} from '../content/WebPreferenceType.js';
import {UserLoginType} from '../login/UserLogin.js';


const WebUserPreferenceType = new GraphQLObjectType({
  name: 'WebUserPreferenceType',
  description: 'Type for WebUserPreference in content',

  fields: () => ({
    userLogin: {
      type: UserLoginType,
      args : {userLoginId: {type: GraphQLString}},
      resolve: (webUserPreference, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${webUserPreference.userLoginId}`)
    },
    webPreferenceType: {
      type: WebPreferenceTypeType,
      args : {webPreferenceTypeId: {type: GraphQLString}},
      resolve: (webUserPreference, args, {loaders}) => loaders.ofbiz.load(`content/webPreferenceTypes/find?webPreferenceTypeId=${webUserPreference.webPreferenceTypeId}`)
    },
    visitId: {type: GraphQLString},
    webPreferenceValue: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (webUserPreference, args, {loaders}) => loaders.ofbiz.load(`/partys/find?partyId=${webUserPreference.partyId}`)
    }
  })
});

export {WebUserPreferenceType};
    




const WebUserPreferenceInputType = new GraphQLInputObjectType({
  name: 'WebUserPreferenceInputType',
  description: 'input type for WebUserPreference in content',

  fields: () => ({
    userLoginId: {type: GraphQLString},
    webPreferenceTypeId: {type: GraphQLString},
    visitId: {type: GraphQLString},
    webPreferenceValue: {type: GraphQLString},
    partyId: {type: GraphQLString}
  })
});

export {WebUserPreferenceInputType};
    