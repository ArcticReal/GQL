
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SupplierPrefOrder = new GraphQLObjectType({
  name: 'SupplierPrefOrderType',
  description: 'Type for SupplierPrefOrder in product',

  fields: () => ({
    description: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString}
  })
});

export {SupplierPrefOrder};
    