
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



const SaleTypeType = new GraphQLObjectType({
  name: 'SaleTypeType',
  description: 'Type for SaleType in product',

  fields: () => ({
    saleTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SaleTypeType};
    




const SaleTypeInputType = new GraphQLInputObjectType({
  name: 'SaleTypeInputType',
  description: 'input type for SaleType in product',

  fields: () => ({
    saleTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SaleTypeInputType};
    