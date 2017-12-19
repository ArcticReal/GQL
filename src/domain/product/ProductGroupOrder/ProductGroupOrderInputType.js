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

const ProductGroupOrderInputType = new GraphQLInputObjectType({
  name: 'ProductGroupOrderInputType',
  description: 'input type for ProductGroupOrder',

  fields: () => ({
    fromDate: {type: GraphQLString},
    groupOrderId: {type: GraphQLString},
    jobId: {type: GraphQLString},
    productId: {type: GraphQLString},
    reqOrderQty: {type: GraphQLFloat},
    soldOrderQty: {type: GraphQLFloat},
    statusId: {type: GraphQLString},
    thruDate: {type: GraphQLString}
  })
});

export {ProductGroupOrderInputType};
    