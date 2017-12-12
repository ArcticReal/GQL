
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

import {ReturnHeaderType} from '../order/ReturnHeader.js';
import {UserLoginType} from '../login/UserLogin.js';


const ReturnStatusType = new GraphQLObjectType({
  name: 'ReturnStatusType',
  description: 'Type for ReturnStatus in order',

  fields: () => ({
    statusId: {type: GraphQLString},
    returnStatusId: {type: GraphQLString},
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnStatus, args, {loaders}) => loaders.ofbiz.load(`order/returnHeaders/find?returnId=${returnStatus.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (returnStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${returnStatus.changeByUserLoginId}`)
    },
    statusDatetime: {type: GraphQLString}
  })
});

export {ReturnStatusType};
    




const ReturnStatusInputType = new GraphQLInputObjectType({
  name: 'ReturnStatusInputType',
  description: 'input type for ReturnStatus in order',

  fields: () => ({
    statusId: {type: GraphQLString},
    returnStatusId: {type: GraphQLString},
    returnId: {type: GraphQLString},
    returnItemSeqId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString},
    statusDatetime: {type: GraphQLString}
  })
});

export {ReturnStatusInputType};
    