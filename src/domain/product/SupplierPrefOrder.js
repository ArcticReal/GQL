
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

import {SupplierProductType} from '../product/SupplierProduct.js';


const SupplierPrefOrderType = new GraphQLObjectType({
  name: 'SupplierPrefOrderType',
  description: 'Type for SupplierPrefOrder in product',

  fields: () => ({
    description: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString},
    supplierProducts: {
      type: new GraphQLList(SupplierProductType),
      args : {},
      resolve: (supplierPrefOrder, args, {loaders}) => loaders.ofbizArray.load(`product/product/supplierProducts/find?supplierPrefOrderId=${supplierPrefOrder.supplierPrefOrderId}`)
    }
  })
});

export {SupplierPrefOrderType};
    




const SupplierPrefOrderInputType = new GraphQLInputObjectType({
  name: 'SupplierPrefOrderInputType',
  description: 'input type for SupplierPrefOrder in product',

  fields: () => ({
    description: {type: GraphQLString},
    supplierPrefOrderId: {type: GraphQLString}
  })
});

export {SupplierPrefOrderInputType};
    