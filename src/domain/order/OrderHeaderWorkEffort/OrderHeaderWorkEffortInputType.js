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

const OrderHeaderWorkEffortInputType = new GraphQLInputObjectType({
  name: 'OrderHeaderWorkEffortInputType',
  description: 'input type for OrderHeaderWorkEffort',

  fields: () => ({
    orderId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {OrderHeaderWorkEffortInputType};
    