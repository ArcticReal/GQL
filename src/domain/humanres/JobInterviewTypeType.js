
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {JobInterviewType} from '../humanres/JobInterviewType.js';


const JobInterviewTypeType = new GraphQLObjectType({
  name: 'JobInterviewTypeType',
  description: 'Type for JobInterviewType in humanres',

  fields: () => ({
    jobInterviewTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    jobInterview: {
      type: new GraphQLList(JobInterviewType),
      args : {jobInterviewTypeId: {type: GraphQLString}},
      resolve: (jobInterviewType, args, {loaders}) => loaders.ofbizArray.load(`jobInterviews/find?jobInterviewTypeId=${jobInterviewType.jobInterviewTypeId}`)
    }
  })
});

export {JobInterviewTypeType};
    