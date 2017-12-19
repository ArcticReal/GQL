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

const OrderItemTypeInputType = new GraphQLInputObjectType({
  name: 'OrderItemTypeInputType',
  description: 'input type for OrderItemType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    orderItemTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {OrderItemTypeInputType};
    