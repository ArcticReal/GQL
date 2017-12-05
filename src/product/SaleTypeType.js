
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';



const SaleType = new GraphQLObjectType({
  name: 'SaleTypeType',
  description: 'Type for SaleType in product',

  fields: () => ({
    saleTypeId: {type: GraphQLString},
    description: {type: GraphQLString}
  })
});

export {SaleType};
    