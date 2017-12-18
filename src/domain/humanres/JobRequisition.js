
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
    




const JobRequisitionInputType = new GraphQLInputObjectType({
  name: 'JobRequisitionInputType',
  description: 'input type for JobRequisition',

  fields: () => ({
    age: {type: GraphQLInt},
    durationMonths: {type: GraphQLInt},
    examTypeEnumId: {type: GraphQLString},
    experienceMonths: {type: GraphQLInt},
    experienceYears: {type: GraphQLInt},
    gender: {type: GraphQLBoolean},
    jobLocation: {type: GraphQLString},
    jobPostingTypeEnumId: {type: GraphQLString},
    jobRequisitionDate: {type: GraphQLString},
    jobRequisitionId: {type: GraphQLString},
    noOfResources: {type: GraphQLInt},
    qualification: {type: GraphQLString},
    requiredOnDate: {type: GraphQLString},
    skillTypeId: {type: GraphQLString}
  })
});

export {JobRequisitionInputType};
    