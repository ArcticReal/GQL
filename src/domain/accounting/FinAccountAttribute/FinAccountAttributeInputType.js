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

const FinAccountAttributeInputType = new GraphQLInputObjectType({
  name: 'FinAccountAttributeInputType',
  description: 'input type for FinAccountAttribute',

  fields: () => ({
    attrDescription: {type: GraphQLString},
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    finAccountId: {type: GraphQLString}
  })
});

export {FinAccountAttributeInputType};
    