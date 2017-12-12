
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
import {SkillTypeType} from '../humanres/SkillType.js';


const WorkEffortSkillStandardType = new GraphQLObjectType({
  name: 'WorkEffortSkillStandardType',
  description: 'Type for WorkEffortSkillStandard in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortSkillStandard, args, {loaders}) => loaders.ofbiz.load(`workeffort/workEfforts/find?workEffortId=${workEffortSkillStandard.workEffortId}`)
    },
    skillType: {
      type: SkillTypeType,
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (workEffortSkillStandard, args, {loaders}) => loaders.ofbiz.load(`humanres/skillTypes/find?skillTypeId=${workEffortSkillStandard.skillTypeId}`)
    },
    estimatedNumPeople: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat}
  })
});

export {WorkEffortSkillStandardType};
    




const WorkEffortSkillStandardInputType = new GraphQLInputObjectType({
  name: 'WorkEffortSkillStandardInputType',
  description: 'input type for WorkEffortSkillStandard in workeffort',

  fields: () => ({
    workEffortId: {type: GraphQLString},
    skillTypeId: {type: GraphQLString},
    estimatedNumPeople: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat}
  })
});

export {WorkEffortSkillStandardInputType};
    