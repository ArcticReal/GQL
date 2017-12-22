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

const FinAccountTransAttributeResponseType = new GraphQLObjectType({
  name: 'FinAccountTransAttributeResponseType',
  description: 'response type for FinAccountTransAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString}
  })
});

export {FinAccountTransAttributeResponseType};
    