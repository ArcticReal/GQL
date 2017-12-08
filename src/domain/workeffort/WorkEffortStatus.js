
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

import {WorkEffortType} from '../workeffort/WorkEffort.js';
import {UserLoginType} from '../login/UserLogin.js';


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
    




const WorkEffortStatusInputType = new GraphQLInputObjectType({
  name: 'WorkEffortStatusInputType',
  description: 'input type for WorkEffortStatus in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    reason: {type: GraphQLString},
    statusId: {type: GraphQLString},
    setByUserLogin: {type: GraphQLString},
    statusDatetime: {type: GraphQLString}
  })
});

export {WorkEffortStatusInputType};
    