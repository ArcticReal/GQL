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

const FinAccountAttributeResponseType = new GraphQLObjectType({
  name: 'FinAccountAttributeResponseType',
  description: 'response type for FinAccountAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountId: {type: GraphQLString}
  })
});

export {FinAccountAttributeResponseType};
    