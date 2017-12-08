
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

import {PartySkillType} from '../humanres/PartySkill.js';
import {WorkEffortSkillStandardType} from '../workeffort/WorkEffortSkillStandard.js';
import {QuoteItemType} from '../order/QuoteItem.js';
import {JobRequisitionType} from '../humanres/JobRequisition.js';


const SkillTypeType = new GraphQLObjectType({
  name: 'SkillTypeType',
  description: 'Type for SkillType in humanres',

  fields: () => ({
    skillTypeId: {type: GraphQLString},
    parentType: {
      type: SkillTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbiz.load(`skillTypes/find?skillTypeId=${skillType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?skillTypeId=${skillType.skillTypeId}`)
    },
    skillTypes: {
      type: new GraphQLList(SkillTypeType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`skillTypes/find?skillTypeId=${skillType.skillTypeId}`)
    },
    partySkills: {
      type: new GraphQLList(PartySkillType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`partySkills/find?skillTypeId=${skillType.skillTypeId}`)
    },
    workEffortSkillStandards: {
      type: new GraphQLList(WorkEffortSkillStandardType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`workEffortSkillStandards/find?skillTypeId=${skillType.skillTypeId}`)
    },
    jobRequisitions: {
      type: new GraphQLList(JobRequisitionType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`jobRequisitions/find?skillTypeId=${skillType.skillTypeId}`)
    }
  })
});

export {SkillTypeType};
    




const SkillTypeInputType = new GraphQLInputObjectType({
  name: 'SkillTypeInputType',
  description: 'input type for SkillType in humanres',

  fields: () => ({
    skillTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString}
  })
});

export {SkillTypeInputType};
    