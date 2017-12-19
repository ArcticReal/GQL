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

const ProductMeterTypeInputType = new GraphQLInputObjectType({
  name: 'ProductMeterTypeInputType',
  description: 'input type for ProductMeterType',

  fields: () => ({
    defaultUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {ProductMeterTypeInputType};
    