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

const QuantityBreakInputType = new GraphQLInputObjectType({
  name: 'QuantityBreakInputType',
  description: 'input type for QuantityBreak',

  fields: () => ({
    fromQuantity: {type: GraphQLFloat},
    quantityBreakId: {type: GraphQLString},
    quantityBreakTypeId: {type: GraphQLString},
    thruQuantity: {type: GraphQLFloat}
  })
});

export {QuantityBreakInputType};
    