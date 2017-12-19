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

const RequirementStatusInputType = new GraphQLInputObjectType({
  name: 'RequirementStatusInputType',
  description: 'input type for RequirementStatus',

  fields: () => ({
    changeByUserLoginId: {type: GraphQLString},
    requirementId: {type: GraphQLString},
    statusDate: {type: GraphQLString},
    statusId: {type: GraphQLString}
  })
});

export {RequirementStatusInputType};
    