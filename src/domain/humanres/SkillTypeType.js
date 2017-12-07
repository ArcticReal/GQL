
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {PartySkillType} from '../humanres/PartySkillType.js';
import {WorkEffortSkillStandardType} from '../workeffort/WorkEffortSkillStandardType.js';
import {QuoteItemType} from '../order/QuoteItemType.js';
import {JobRequisitionType} from '../humanres/JobRequisitionType.js';


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
    quoteItem: {
      type: new GraphQLList(QuoteItemType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`quoteItems/find?skillTypeId=${skillType.skillTypeId}`)
    },
    skillType: {
      type: new GraphQLList(SkillTypeType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`skillTypes/find?skillTypeId=${skillType.skillTypeId}`)
    },
    partySkill: {
      type: new GraphQLList(PartySkillType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`partySkills/find?skillTypeId=${skillType.skillTypeId}`)
    },
    workEffortSkillStandard: {
      type: new GraphQLList(WorkEffortSkillStandardType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`workEffortSkillStandards/find?skillTypeId=${skillType.skillTypeId}`)
    },
    jobRequisition: {
      type: new GraphQLList(JobRequisitionType),
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`jobRequisitions/find?skillTypeId=${skillType.skillTypeId}`)
    }
  })
});

export {SkillTypeType};
    