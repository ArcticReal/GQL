
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

import {RequirementType} from '../order/Requirement.js';
import {UserLoginType} from '../login/UserLogin.js';


const RequirementStatusType = new GraphQLObjectType({
  name: 'RequirementStatusType',
  description: 'Type for RequirementStatus in order',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    requirement: {
      type: RequirementType,
      args : {requirementId: {type: GraphQLString}},
      resolve: (requirementStatus, args, {loaders}) => loaders.ofbiz.load(`order/requirements/find?requirementId=${requirementStatus.requirementId}`)
    },
    changeByUserLogin: {
      type: UserLoginType,
      args : {changeByUserLoginId: {type: GraphQLString}},
      resolve: (requirementStatus, args, {loaders}) => loaders.ofbiz.load(`login/userLogins/find?userLoginId=${requirementStatus.changeByUserLoginId}`)
    }
  })
});

export {RequirementStatusType};
    




const RequirementStatusInputType = new GraphQLInputObjectType({
  name: 'RequirementStatusInputType',
  description: 'input type for RequirementStatus in order',

  fields: () => ({
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString},
    requirementId: {type: GraphQLString},
    changeByUserLoginId: {type: GraphQLString}
  })
});

export {RequirementStatusInputType};
    