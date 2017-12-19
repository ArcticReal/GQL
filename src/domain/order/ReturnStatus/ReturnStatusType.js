
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

import {ReturnHeaderType} from '../../order/ReturnHeader/ReturnHeaderType.js';
import {UserLoginType} from '../../login/UserLogin/UserLoginType.js';


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
    