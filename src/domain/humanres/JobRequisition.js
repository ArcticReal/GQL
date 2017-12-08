
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

import {EmploymentAppType} from '../humanres/EmploymentApp.js';
import {SkillTypeType} from '../humanres/SkillType.js';
import {JobInterviewType} from '../humanres/JobInterview.js';


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
    jobInterviews: {
      type: new GraphQLList(JobInterviewType),
      args : {jobRequisitionId: {type: GraphQLString}},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbizArray.load(`jobInterviews/find?jobRequisitionId=${jobRequisition.jobRequisitionId}`)
    },
    employmentApps: {
      type: new GraphQLList(EmploymentAppType),
      args : {jobRequisitionId: {type: GraphQLString}},
      resolve: (jobRequisition, args, {loaders}) => loaders.ofbizArray.load(`employmentApps/find?jobRequisitionId=${jobRequisition.jobRequisitionId}`)
    }
  })
});

export {JobRequisitionType};
    




const JobRequisitionInputType = new GraphQLInputObjectType({
  name: 'JobRequisitionInputType',
  description: 'input type for JobRequisition in humanres',

  fields: () => ({
    durationMonths: {type: GraphQLInt},
    gender: {type: GraphQLBoolean},
    noOfResources: {type: GraphQLInt},
    jobRequisitionId: {type: GraphQLString},
    experienceYears: {type: GraphQLInt},
    jobRequisitionDate: {type: GraphQLString},
    requiredOnDate: {type: GraphQLString},
    qualification: {type: GraphQLString},
    skillTypeId: {type: GraphQLString},
    experienceMonths: {type: GraphQLInt},
    jobLocation: {type: GraphQLString},
    examTypeEnumId: {type: GraphQLString},
    age: {type: GraphQLInt},
    jobPostingTypeEnumId: {type: GraphQLString}
  })
});

export {JobRequisitionInputType};
    