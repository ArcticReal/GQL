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

const OrderItemAssocTypeInputType = new GraphQLInputObjectType({
  name: 'OrderItemAssocTypeInputType',
  description: 'input type for OrderItemAssocType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    orderItemAssocTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {OrderItemAssocTypeInputType};
    