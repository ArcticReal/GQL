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

const WorkEffortSkillStandardResponseType = new GraphQLObjectType({
  name: 'WorkEffortSkillStandardResponseType',
  description: 'response type for WorkEffortSkillStandard',

  fields: () => ({
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat},
    estimatedNumPeople: {type: GraphQLFloat},
    skillTypeId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortSkillStandardResponseType};
    