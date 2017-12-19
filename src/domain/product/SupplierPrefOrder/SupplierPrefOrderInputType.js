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

const SupplierPrefOrderInputType = new GraphQLInputObjectType({
  name: 'SupplierPrefOrderInputType',
  description: 'input type for SupplierPrefOrder',

  fields: () => ({
    description: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString}
  })
});

export {SupplierPrefOrderInputType};
    