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

const QuantityBreakTypeInputType = new GraphQLInputObjectType({
  name: 'QuantityBreakTypeInputType',
  description: 'input type for QuantityBreakType',

  fields: () => ({
    description: {type: GraphQLString},
    quantityBreakTypeId: {type: GraphQLString}
  })
});

export {QuantityBreakTypeInputType};
    