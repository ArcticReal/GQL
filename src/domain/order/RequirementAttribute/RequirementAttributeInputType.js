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

const RequirementAttributeInputType = new GraphQLInputObjectType({
  name: 'RequirementAttributeInputType',
  description: 'input type for RequirementAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {RequirementAttributeInputType};
    