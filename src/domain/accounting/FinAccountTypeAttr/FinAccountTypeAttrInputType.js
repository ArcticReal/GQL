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

const FinAccountTypeAttrInputType = new GraphQLInputObjectType({
  name: 'FinAccountTypeAttrInputType',
  description: 'input type for FinAccountTypeAttr',

  fields: () => ({
    attrName: {type: GraphQLString},
    attrValue: {type: GraphQLString},
    description: {type: GraphQLString},
    finAccountTypeId: {type: GraphQLString}
  })
});

export {FinAccountTypeAttrInputType};
    