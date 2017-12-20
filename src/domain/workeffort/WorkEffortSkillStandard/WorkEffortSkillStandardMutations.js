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
import {WorkEffortSkillStandardInputType} from '../../workeffort/WorkEffortSkillStandard/WorkEffortSkillStandardInputType.js';
import {postToUrl,deleteToUrl,putToUrl} from '../../../framework/ofbizCon.js';
import {ResopnseType,KeyValueInputType} from '../../../framework/helpTypes.js';


const createWorkEffortSkillStandard = {
  type: ResopnseType,
  description: 'mutation for ofbiz createWorkEffortSkillStandard method',
  args:{},
  resolve: (root, args, {req}) => {
    return postToUrl(`workeffort/workEffort/workEffortSkillStandards/add?`, null, req);
  }
};
export {createWorkEffortSkillStandard};


const updateWorkEffortSkillStandard = {
  type: ResopnseType,
  description: 'mutation for ofbiz updateWorkEffortSkillStandard method',
  args:{workEffortSkillStandardToBeUpdated: {type: WorkEffortSkillStandardInputType},nullVal: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return putToUrl(`workeffort/workEffort/workEffortSkillStandards/${args.nullVal}?`, args.workEffortSkillStandardToBeUpdated, req);
  }
};
export {updateWorkEffortSkillStandard};


const deleteWorkEffortSkillStandardByIdUpdated = {
  type: ResopnseType,
  description: 'mutation for ofbiz deleteWorkEffortSkillStandardByIdUpdated method',
  args:{workEffortSkillStandardId: {type: GraphQLString}},
  resolve: (root, args, {req}) => {
    return deleteToUrl(`workeffort/workEffort/workEffortSkillStandards/${args.workEffortSkillStandardId}?`, null, req);
  }
};
export {deleteWorkEffortSkillStandardByIdUpdated};
