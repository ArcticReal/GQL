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

const JobInterviewTypeInputType = new GraphQLInputObjectType({
  name: 'JobInterviewTypeInputType',
  description: 'input type for JobInterviewType',

  fields: () => ({
    description: {type: GraphQLString},
    jobInterviewTypeId: {type: GraphQLString}
  })
});

export {JobInterviewTypeInputType};
    