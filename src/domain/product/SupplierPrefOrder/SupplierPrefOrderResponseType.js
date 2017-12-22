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

const SupplierPrefOrderResponseType = new GraphQLObjectType({
  name: 'SupplierPrefOrderResponseType',
  description: 'response type for SupplierPrefOrder',

  fields: () => ({
    description: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString}
  })
});

export {SupplierPrefOrderResponseType};
    