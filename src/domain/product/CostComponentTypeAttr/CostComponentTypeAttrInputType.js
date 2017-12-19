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

const CostComponentTypeAttrInputType = new GraphQLInputObjectType({
  name: 'CostComponentTypeAttrInputType',
  description: 'input type for CostComponentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CostComponentTypeAttrInputType};
    