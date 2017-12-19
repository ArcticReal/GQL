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

const WorkEffortSkillStandardInputType = new GraphQLInputObjectType({
  name: 'WorkEffortSkillStandardInputType',
  description: 'input type for WorkEffortSkillStandard',

  fields: () => ({
    estimatedCost: {type: GraphQLFloat},
    estimatedDuration: {type: GraphQLFloat},
    estimatedNumPeople: {type: GraphQLFloat},
    skillTypeId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {WorkEffortSkillStandardInputType};
    