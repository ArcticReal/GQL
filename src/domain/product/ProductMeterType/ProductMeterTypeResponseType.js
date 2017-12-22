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

const ProductMeterTypeResponseType = new GraphQLObjectType({
  name: 'ProductMeterTypeResponseType',
  description: 'response type for ProductMeterType',

  fields: () => ({
    defaultUomId: {type: GraphQLString},
    description: {type: GraphQLString},
    productMeterTypeId: {type: GraphQLString}
  })
});

export {ProductMeterTypeResponseType};
    