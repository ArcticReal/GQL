
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

import {EmploymentAppType} from '../../humanres/EmploymentApp/EmploymentAppType.js';
import {SkillTypeType} from '../../humanres/SkillType/SkillTypeType.js';
import {JobInterviewType} from '../../humanres/JobInterview/JobInterviewType.js';


const JobRequisitionType = new GraphQLObjectType({
  name: 'JobRequisitionType',
  description: 'Type for JobRequisition in humanres',

  fields: () => ({
    durationMonths: {type: GraphQLInt},
    gender: {type: GraphQLBoolean},
    noOfResources: {type: GraphQLInt},
    jobRequisitionId: {type: GraphQLString},
    experienceYears: {type: GraphQLInt},
    jobRequisitionDate: {type: GraphQLString},
    requiredOnDate: {type: GraphQLString},
    qualification: {type: GraphQLString},
    skillType: {
      type: SkillTypeType,
      args : {skillTypeId: {type: GraphQLString}},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbiz.load(`humanres/skillTypes/find?skillTypeId=${jobRequisition.skillTypeId}`)
    },
    experienceMonths: {type: GraphQLInt},
    jobLocation: {type: GraphQLString},
    examTypeEnumId: {type: GraphQLString},
    age: {type: GraphQLInt},
    jobPostingTypeEnumId: {type: GraphQLString},
    jobInterviews: {
      type: new GraphQLList(JobInterviewType),
      args : {},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbizArray.load(`humanres/jobInterviews/find?jobRequisitionId=${jobRequisition.jobRequisitionId}`)
    },
    employmentApps: {
      type: new GraphQLList(EmploymentAppType),
      args : {},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbizArray.load(`humanres/employment/employmentApps/find?jobRequisitionId=${jobRequisition.jobRequisitionId}`)
    }
  })
});

export {JobRequisitionType};
    