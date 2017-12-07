
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartyType} from '../party/PartyType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const PartyStatusType = new GraphQLObjectType({
  name: 'PartyStatusType',
  description: 'Type for PartyStatus in party',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    party: {
      type: PartyType,
      args : {partyId: {type: GraphQLString}},
      resolve: (partyStatus, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${partyStatus.partyId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (partyStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${partyStatus.changeByUserLoginId}`)
    }
  })
});

export {PartyStatusType};
    