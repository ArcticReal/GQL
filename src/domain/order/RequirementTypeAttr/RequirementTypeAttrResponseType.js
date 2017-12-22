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

const RequirementTypeAttrResponseType = new GraphQLObjectType({
  name: 'RequirementTypeAttrResponseType',
  description: 'response type for RequirementTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    requirementTypeId: {type: GraphQLString}
  })
});

export {RequirementTypeAttrResponseType};
    