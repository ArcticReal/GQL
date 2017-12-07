
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
import {SkillTypeType} from '../humanres/SkillTypeType.js';


const WorkEffortSkillStandardType = new GraphQLObjectType({
  name: 'WorkEffortSkillStandardType',
  description: 'Type for WorkEffortSkillStandard in workeffort',

  fields: () => ({
    workEffort: {
      type: WorkEffortType,
      args : {workEffortId: {type: GraphQLString}},
      resolve: (workEffortSkillStandard, args, {loaders}) => loaders.ofbiz.load(`workEfforts/find?workEffortId=${workEffortSkillStandard.workEffortId}`)
    },
    skillType: {
      type: SkillTypeType,
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (workEffortSkillStandard, args, {loaders}) => loaders.ofbiz.load(`skillTypes/find?skillTypeId=${workEffortSkillStandard.skillTypeId}`)
    },
    estimatedNumPeople: {type: GraphQLFloat},
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat}
  })
});

export {WorkEffortSkillStandardType};
    