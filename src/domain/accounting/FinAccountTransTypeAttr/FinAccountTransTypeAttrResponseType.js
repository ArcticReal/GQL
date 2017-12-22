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

const FinAccountTransTypeAttrResponseType = new GraphQLObjectType({
  name: 'FinAccountTransTypeAttrResponseType',
  description: 'response type for FinAccountTransTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    description: {type: GraphQLString},
    finAccountTransTypeId: {type: GraphQLString}
  })
});

export {FinAccountTransTypeAttrResponseType};
    