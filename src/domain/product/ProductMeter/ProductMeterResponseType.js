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

const ProductMeterResponseType = new GraphQLObjectType({
  name: 'ProductMeterResponseType',
  description: 'response type for ProductMeter',

  fields: () => ({
    meterName: {type: GraphQLString},
    meterUomId: {type: GraphQLString},
    productId: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {ProductMeterResponseType};
    