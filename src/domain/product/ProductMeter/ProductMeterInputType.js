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

const ProductMeterInputType = new GraphQLInputObjectType({
  name: 'ProductMeterInputType',
  description: 'input type for ProductMeter',

  fields: () => ({
    meterName: {type: GraphQLString},
    meterUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {ProductMeterInputType};
    