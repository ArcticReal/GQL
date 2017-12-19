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

const CostComponentAttributeInputType = new GraphQLInputObjectType({
  name: 'CostComponentAttributeInputType',
  description: 'input type for CostComponentAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    costComponentId: {type: GraphQLString}
  })
});

export {CostComponentAttributeInputType};
    