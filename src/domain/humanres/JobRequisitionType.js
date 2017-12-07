
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {EmploymentAppType} from '../humanres/EmploymentAppType.js';
import {SkillTypeType} from '../humanres/SkillTypeType.js';
import {JobInterviewType} from '../humanres/JobInterviewType.js';


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
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbiz.load(`skillTypes/find?skillTypeId=${jobRequisition.skillTypeId}`)
    },
    experienceMonths: {type: GraphQLInt},
    jobLocation: {type: GraphQLString},
    examTypeEnumId: {type: GraphQLString},
    age: {type: GraphQLInt},
    jobPostingTypeEnumId: {type: GraphQLString},
    jobInterview: {
      type: new GraphQLList(JobInterviewType),
      args : {jobRequisitionId: {type: GraphQLString}},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbizArray.load(`jobInterviews/find?jobRequisitionId=${jobRequisition.jobRequisitionId}`)
    },
    employmentApp: {
      type: new GraphQLList(EmploymentAppType),
      args : {jobRequisitionId: {type: GraphQLString}},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbizArray.load(`employmentApps/find?jobRequisitionId=${jobRequisition.jobRequisitionId}`)
    }
  })
});

export {JobRequisitionType};
    