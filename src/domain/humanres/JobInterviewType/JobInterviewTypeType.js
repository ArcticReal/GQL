
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

import {JobInterviewType} from '../../humanres/JobInterview/JobInterviewType.js';


const JobInterviewTypeType = new GraphQLObjectType({
  name: 'JobInterviewTypeType',
  description: 'Type for JobInterviewType in humanres',

  fields: () => ({
    jobInterviewTypeId: {type: GraphQLString},
    description: {type: GraphQLString},
    jobInterviews: {
      type: new GraphQLList(JobInterviewType),
      args : {},
      resolve: (jobInterviewType, args, {loaders}) => loaders.ofbizArray.load(`humanres/jobInterviews/find?jobInterviewTypeId=${jobInterviewType.jobInterviewTypeId}`)
    }
  })
});

export {JobInterviewTypeType};
    