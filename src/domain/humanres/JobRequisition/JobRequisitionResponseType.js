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

const JobRequisitionResponseType = new GraphQLObjectType({
  name: 'JobRequisitionResponseType',
  description: 'response type for JobRequisition',

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

export {JobRequisitionResponseType};
    