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

const RequirementTypeResponseType = new GraphQLObjectType({
  name: 'RequirementTypeResponseType',
  description: 'response type for RequirementType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    parentTypeId: {type: GraphQLString},
    requirementTypeId: {type: GraphQLString}
  })
});

export {RequirementTypeResponseType};
    