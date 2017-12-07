
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {WorkEffortType} from '../workeffort/WorkEffortType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const WorkEffortStatusType = new GraphQLObjectType({
  name: 'WorkEffortStatusType',
  description: 'Type for WorkEffortStatus in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortStatus, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortStatus.workEffortId}`)
    },
    reason: {type: GraphQLString},
    statusId: {type: GraphQLString},
    setByUserLogin: {
      type: UserLoginType,
      args : {setByUserLogin: {type: GraphQLString}},
      resolve: (workEffortStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${workEffortStatus.setByUserLogin}`)
    },
    statusDatetime: {type: GraphQLString}
  })
});

export {WorkEffortStatusType};
    