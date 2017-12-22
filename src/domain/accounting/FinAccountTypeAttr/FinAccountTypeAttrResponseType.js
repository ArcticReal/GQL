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

const FinAccountTypeAttrResponseType = new GraphQLObjectType({
  name: 'FinAccountTypeAttrResponseType',
  description: 'response type for FinAccountTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString}
  })
});

export {FinAccountTypeAttrResponseType};
    