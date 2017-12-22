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

const QuantityBreakResponseType = new GraphQLObjectType({
  name: 'QuantityBreakResponseType',
  description: 'response type for QuantityBreak',

  fields: () => ({
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString},
    quantityBreakTypeId: {type: GraphQLString},
    thruQuantity: {type: GraphQLFloat}
  })
});

export {QuantityBreakResponseType};
    