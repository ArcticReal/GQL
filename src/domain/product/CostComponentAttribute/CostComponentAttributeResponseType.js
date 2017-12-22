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

const CostComponentAttributeResponseType = new GraphQLObjectType({
  name: 'CostComponentAttributeResponseType',
  description: 'response type for CostComponentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    costComponentId: {type: GraphQLString}
  })
});

export {CostComponentAttributeResponseType};
    