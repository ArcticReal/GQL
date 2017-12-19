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

const FinAccountTransTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransTypeAttrInputType',
  description: 'input type for FinAccountTransTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    finAccountTransTypeId: {type: GraphQLString}
  })
});

export {FinAccountTransTypeAttrInputType};
    