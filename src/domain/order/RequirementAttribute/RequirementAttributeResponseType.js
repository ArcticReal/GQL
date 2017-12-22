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

const RequirementAttributeResponseType = new GraphQLObjectType({
  name: 'RequirementAttributeResponseType',
  description: 'response type for RequirementAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    requirementId: {type: GraphQLString}
  })
});

export {RequirementAttributeResponseType};
    