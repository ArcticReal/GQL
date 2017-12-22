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

const QuantityBreakTypeResponseType = new GraphQLObjectType({
  name: 'QuantityBreakTypeResponseType',
  description: 'response type for QuantityBreakType',

  fields: () => ({
    description: {type: GraphQLString},
    quantityBreakTypeId: {type: GraphQLString}
  })
});

export {QuantityBreakTypeResponseType};
    