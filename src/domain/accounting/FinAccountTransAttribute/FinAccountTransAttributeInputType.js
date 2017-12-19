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

const FinAccountTransAttributeInputType = new GraphQLInputObjectType({
  name: 'FinAccountTransAttributeInputType',
  description: 'input type for FinAccountTransAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountTransId: {type: GraphQLString}
  })
});

export {FinAccountTransAttributeInputType};
    