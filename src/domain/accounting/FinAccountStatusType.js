
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {FinAccountType} from '../accounting/FinAccountType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const FinAccountStatusType = new GraphQLObjectType({
  name: 'FinAccountStatusType',
  description: 'Type for FinAccountStatus in accounting',

  fields: () => ({
    statusDate: {type: GraphQLString},
    finAccount: {
      type: FinAccountType,
      args : {finAccountId: {type: GraphQLString}},
      resolve: (finAccountStatus, args, {loaders}) => loaders.ofbiz.load(`finAccounts/find?finAccountId=${finAccountStatus.finAccountId}`)
    },
    statusId: {type: GraphQLString},
    statusEndDate: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (finAccountStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${finAccountStatus.changeByUserLoginId}`)
    }
  })
});

export {FinAccountStatusType};
    