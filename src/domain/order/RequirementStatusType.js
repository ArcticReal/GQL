
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {RequirementType} from '../order/RequirementType.js';
import {UserLoginType} from '../login/UserLoginType.js';


const RequirementStatusType = new GraphQLObjectType({
  name: 'RequirementStatusType',
  description: 'Type for RequirementStatus in order',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementStatus, args, {loaders}) => loaders.ofbiz.load(`requirements/find?requirementId=${requirementStatus.requirementId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (requirementStatus, args, {loaders}) => loaders.ofbiz.load(`userLogins/find?userLoginId=${requirementStatus.changeByUserLoginId}`)
    }
  })
});

export {RequirementStatusType};
    