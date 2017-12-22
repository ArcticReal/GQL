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

const JobInterviewTypeResponseType = new GraphQLObjectType({
  name: 'JobInterviewTypeResponseType',
  description: 'response type for JobInterviewType',

  fields: () => ({
    description: {type: GraphQLString},
    jobInterviewTypeId: {type: GraphQLString}
  })
});

export {JobInterviewTypeResponseType};
    