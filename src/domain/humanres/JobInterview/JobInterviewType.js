
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

import {PartyType} from '../../party/Party/PartyType.js';
import {JobInterviewTypeType} from '../../humanres/JobInterviewType/JobInterviewTypeType.js';
import {JobRequisitionType} from '../../humanres/JobRequisition/JobRequisitionType.js';


const JobInterviewType = new GraphQLObjectType({
  name: 'JobInterviewType',
  description: 'Type for JobInterview in humanres',

  fields: () => ({
    jobInterviewId: {type: GraphQLString},
    jobInterviewType: {
      type: JobInterviewTypeType,
      args : {jobInterviewTypeId: {type: GraphQLString}},
      resolve: (jobInterview, args, {loaders}) => loaders.ofbiz.load(`humanres/jobInterview/jobInterviewTypes/find?jobInterviewTypeId=${jobInterview.jobInterviewTypeId}`)
    },
    gradeSecuredEnumId: {type: GraphQLString},
    jobIntervieweeParty: {
      type: PartyType,
      args : {jobIntervieweePartyId: {type: GraphQLString}},
      resolve: (jobInterview, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${jobInterview.jobIntervieweePartyId}`)
    },
    jobInterviewDate: {type: GraphQLString},
    jobInterviewerParty: {
      type: PartyType,
      args : {jobInterviewerPartyId: {type: GraphQLString}},
      resolve: (jobInterview, args, {loaders}) => loaders.ofbiz.load(`partys/find?partyId=${jobInterview.jobInterviewerPartyId}`)
    },
    jobInterviewResult: {type: GraphQLString},
    jobRequisition: {
      type: JobRequisitionType,
      args : {jobRequisitionId: {type: GraphQLString}},
      resolve: (jobInterview, args, {loaders}) => loaders.ofbiz.load(`humanres/jobRequisitions/find?jobRequisitionId=${jobInterview.jobRequisitionId}`)
    }
  })
});

export {JobInterviewType};
    