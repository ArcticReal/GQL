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

const OrderAdjustmentTypeInputType = new GraphQLInputObjectType({
  name: 'OrderAdjustmentTypeInputType',
  description: 'input type for OrderAdjustmentType',

  fields: () => ({
    description: {type: GraphQLString},
    hasTable: {type: GraphQLBoolean},
    orderAdjustmentTypeId: {type: GraphQLString},
    parentTypeId: {type: GraphQLString}
  })
});

export {OrderAdjustmentTypeInputType};
    