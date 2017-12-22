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

const OrderHeaderWorkEffortResponseType = new GraphQLObjectType({
  name: 'OrderHeaderWorkEffortResponseType',
  description: 'response type for OrderHeaderWorkEffort',

  fields: () => ({
    orderId: {type: GraphQLString},
    workEffortId: {type: GraphQLString}
  })
});

export {OrderHeaderWorkEffortResponseType};
    