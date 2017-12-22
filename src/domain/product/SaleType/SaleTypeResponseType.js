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

const SaleTypeResponseType = new GraphQLObjectType({
  name: 'SaleTypeResponseType',
  description: 'response type for SaleType',

  fields: () => ({
    description: {type: GraphQLString},
    saleTypeId: {type: GraphQLString}
  })
});

export {SaleTypeResponseType};
    