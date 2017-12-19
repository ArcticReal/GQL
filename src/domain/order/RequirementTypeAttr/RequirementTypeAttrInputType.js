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

const RequirementTypeAttrInputType = new GraphQLInputObjectType({
  name: 'RequirementTypeAttrInputType',
  description: 'input type for RequirementTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    requirementTypeId: {type: GraphQLString}
  })
});

export {RequirementTypeAttrInputType};
    