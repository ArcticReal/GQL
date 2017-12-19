
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

import {PicklistType} from '../../shipment/Picklist/PicklistType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


const PicklistStatusHistoryType = new GraphQLObjectType({
  name: 'PicklistStatusHistoryType',
  description: 'Type for PicklistStatusHistory in shipment',

  fields: () => ({
    picklist: {
      type: PicklistType,
      args : {picklistId: {type: GraphQLString}},
      resolve: (picklistStatusHistory, args, {loaders}) => loaders.ofbiz.load(`shipment/picklists/find?picklistId=${picklistStatusHistory.picklistId}`)
    },
    statusId: {type: GraphQLString},
    changeDate: {type: GraphQLString},
    statusIdTo: {type: GraphQLString},
    changeUserLogin: {
      type: UserLoginType,
      args : {changeUserLoginId: {type: GraphQLString}},
      resolve: (picklistStatusHistory, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${picklistStatusHistory.changeUserLoginId}`)
    }
  })
});

export {PicklistStatusHistoryType};
    