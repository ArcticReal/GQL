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

const SaleTypeInputType = new GraphQLInputObjectType({
  name: 'SaleTypeInputType',
  description: 'input type for SaleType',

  fields: () => ({
    description: {type: GraphQLString},
    saleTypeId: {type: GraphQLString}
  })
});

export {SaleTypeInputType};
    