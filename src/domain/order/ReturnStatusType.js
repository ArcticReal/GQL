
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ReturnHeaderType} from '../order/ReturnHeaderType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const ReturnStatusType = new GraphQLObjectType({
  name: 'ReturnStatusType',
  description: 'Type for ReturnStatus in order',

  fields: () => ({
    statusId: {type: GraphQLString},
    returnStatusId: {type: GraphQLString},
    return: {
      type: ReturnHeaderType,
      args : {returnId: {type: GraphQLString}},
      resolve: (returnStatus, args, {loaders}) => loaders.ofbiz.load(`returnHeaders/find?returnId=${returnStatus.returnId}`)
    },
    returnItemSeqId: {type: GraphQLString},
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (returnStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${returnStatus.changeByUserLoginId}`)
    },
    statusDatetime: {type: GraphQLString}
  })
});

export {ReturnStatusType};
    