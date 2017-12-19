
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

import {PartySkillType} from '../../humanres/PartySkill/PartySkillType.js';
import {WorkEffortSkillStandardType} from '../../workeffort/WorkEffortSkillStandard/WorkEffortSkillStandardType.js';
import {QuoteItemType} from '../../order/QuoteItem/QuoteItemType.js';
import {JobRequisitionType} from '../../humanres/JobRequisition/JobRequisitionType.js';


const SkillTypeType = new GraphQLObjectType({
  name: 'SkillTypeType',
  description: 'Type for SkillType in humanres',

  fields: () => ({
    skillTypeId: {type: GraphQLString},
    parentType: {
      type: SkillTypeType,
      args : {parentTypeId: {type: GraphQLString}},
      resolve: (skillType, args, {loaders}) => loaders.ofbiz.load(`humanres/skillTypes/find?skillTypeId=${skillType.parentTypeId}`)
    },
    hasTable: {type: GraphQLBoolean},
    description: {type: GraphQLString},
    quoteItems: {
      type: new GraphQLList(QuoteItemType),
      args : {},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`order/quote/quoteItems/find?skillTypeId=${skillType.skillTypeId}`)
    },
    skillTypes: {
      type: new GraphQLList(SkillTypeType),
      args : {},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`humanres/skillTypes/find?skillTypeId=${skillType.skillTypeId}`)
    },
    partySkills: {
      type: new GraphQLList(PartySkillType),
      args : {},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`humanres/partySkills/find?skillTypeId=${skillType.skillTypeId}`)
    },
    workEffortSkillStandards: {
      type: new GraphQLList(WorkEffortSkillStandardType),
      args : {},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`workeffort/workEffort/workEffortSkillStandards/find?skillTypeId=${skillType.skillTypeId}`)
    },
    jobRequisitions: {
      type: new GraphQLList(JobRequisitionType),
      args : {},
      resolve: (skillType, args, {loaders}) => loaders.ofbizArray.load(`humanres/jobRequisitions/find?skillTypeId=${skillType.skillTypeId}`)
    }
  })
});

export {SkillTypeType};
    