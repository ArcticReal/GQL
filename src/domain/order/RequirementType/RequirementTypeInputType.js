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

const RequirementTypeInputType = new GraphQLInputObjectType({
  name: 'RequirementTypeInputType',
  description: 'input type for RequirementType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    requirementTypeId: {type: GraphQLString}
  })
});

export {RequirementTypeInputType};
    