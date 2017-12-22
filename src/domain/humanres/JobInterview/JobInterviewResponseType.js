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

const JobInterviewResponseType = new GraphQLObjectType({
  name: 'JobInterviewResponseType',
  description: 'response type for JobInterview',

  fields: () => ({
    gradeSecuredEnumId: {type: GraphQLString},
    jobInterviewDate: {type: GraphQLString},
    jobInterviewId: {type: GraphQLString},
    jobInterviewResult: {type: GraphQLString},
    jobInterviewTypeId: {type: GraphQLString},
    jobIntervieweePartyId: {type: GraphQLString},
    jobInterviewerPartyId: {type: GraphQLString},
    jobRequisitionId: {type: GraphQLString}
  })
});

export {JobInterviewResponseType};
    