
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PicklistType} from '../shipment/PicklistType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const PicklistStatusHistoryType = new GraphQLObjectType({
  name: 'PicklistStatusHistoryType',
  description: 'Type for PicklistStatusHistory in shipment',

  fields: () => ({
    picklist: {
      type: PicklistType,
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklistStatusHistory, args, {loaders}) => loaders.ofbiz.load(`picklists/find?picklistId=${picklistStatusHistory.picklistId}`)
    },
    statusId: {type: GraphQLString},
    changeDate: {type: GraphQLString},
    statusIdTo: {type: GraphQLString},
    changeUserLogin: {
      type: UserLoginType,
      args : {changeUserLoginId: {type: GraphQLString}},
      resolve: (picklistStatusHistory, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${picklistStatusHistory.changeUserLoginId}`)
    }
  })
});

export {PicklistStatusHistoryType};
    