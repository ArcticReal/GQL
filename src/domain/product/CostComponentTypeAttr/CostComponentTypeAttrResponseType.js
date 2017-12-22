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

const CostComponentTypeAttrResponseType = new GraphQLObjectType({
  name: 'CostComponentTypeAttrResponseType',
  description: 'response type for CostComponentTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    costComponentTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {CostComponentTypeAttrResponseType};
    